'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useRouter } from 'next/navigation';
import { Card, CardHeader, CardContent } from './ui/card';
import axios from 'axios';
import { useAuth } from '@/components/context/auth/AuthContext';
import { backendBaseUrl } from '@/lib/utils';
//Define form shema
export const formSchema = z
  .object({
    productiveTime: z
      .tuple([z.number(), z.number()])
      .refine(([start, end]) => end > start, {
        message: 'End must be after start',
      }),
    workDuration: z.coerce
      .number({ invalid_type_error: 'Please enter a valid number of minutes' })
      .min(1, 'Work duration must be at least 1 minute')
      .max(240, 'Keep it under 4 hours for wellness!'),

    sleepHours: z.coerce
      .number({ invalid_type_error: 'Please enter a valid number of hours' })
      .min(1, 'Get some sleep')
      .max(24, 'Over 24 hours is insane and not possible'),

    startTime: z.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, {
      message: 'Invalid start time (24hr format)',
    }),

    endTime: z.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, {
      message: 'Invalid end time (24hr format)',
    }),
  })
  .refine(
    (data) => {
      const [startH, startM] = data.startTime.split(':').map(Number);
      const [endH, endM] = data.endTime.split(':').map(Number);

      const startMinutes = startH * 60 + startM;
      const endMinutes = endH * 60 + endM;

      return endMinutes > startMinutes;
    },
    {
      message: 'End time must be after start time',
      path: ['endTime'],
    }
  );

type UserPreferencesFormProps = {
  onSave?: (values: z.infer<typeof formSchema>) => void;
  disableCard?: boolean; // check if preference registration or edit to add description
};

export function UserPreferencesForm({
  onSave,
  disableCard,
}: UserPreferencesFormProps) {
  const router = useRouter();
  const { user } = useAuth();
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      productiveTime: [540, 720], // 9 AM – 12 PM
      workDuration: 60,
      sleepHours: 8,
      startTime: '09:00',
      endTime: '17:00',
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // This will be type-safe and validated.
    console.log(values);
    if (onSave) {
      //If updating preference
      onSave(values);
    } else {
      const outputs = [];
      for (const question in values) {
        outputs.push({
          question_text: question,
          answer: String(values[question as keyof z.infer<typeof formSchema>]),
        });
      }
      console.log(outputs);
      // Send the data to our backend
      if (!user?.uid) return;

      axios
        .post(backendBaseUrl + `/api/user/surveyresults/${user.uid}`, outputs)
        .then((response) => {
          console.log('Successfully posted answers for user: ', user!.uid);
          console.log(response);
          router.push('/dashboard');
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  const content = (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* Optional Title + Description */}
        {!disableCard && (
          <>
            <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
              Set Your Preferences
            </h1>
            <p className="text-muted-foreground text-sm">
              Tell us how you like to work so we can build a schedule that fits
              your routine. Your answers here help StressLess customize your
              calendar.
            </p>
          </>
        )}
        {/* Productive Time */}
        <FormField
          control={form.control}
          name="productiveTime"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Most Productive Time</FormLabel>
              <FormDescription>
                What time of day are you the most productive?
              </FormDescription>
              <Slider
                min={0}
                max={1439}
                step={15}
                value={field.value}
                onValueChange={field.onChange}
              />
              <div className="flex justify-between text-sm text-muted-foreground mt-1">
                <span>{minutesToTime(field.value[0])}</span>
                <span>{minutesToTime(field.value[1])}</span>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Work Duration */}
        <FormField
          control={form.control}
          name="workDuration"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Work Duration</FormLabel>
              <FormDescription>How long do you want to work?</FormDescription>
              <FormControl>
                <Input placeholder="e.g., 3" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Sleep Time */}
        <FormField
          control={form.control}
          name="sleepHours"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Preferred Sleep Amount</FormLabel>
              <FormDescription>
                How much sleep do you typically get?
              </FormDescription>
              <FormControl>
                <Input type="number" step="0.5" placeholder="8" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Start Time */}
        <FormField
          control={form.control}
          name="startTime"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Start of Workday</FormLabel>
              <FormDescription>
                What time of day do you want to start doing work?
              </FormDescription>
              <FormControl>
                <Input type="time" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* End Time */}
        <FormField
          control={form.control}
          name="endTime"
          render={({ field }) => (
            <FormItem>
              <FormLabel>End of Workday</FormLabel>
              <FormDescription>
                What time of day do you want to stop doing work?
              </FormDescription>
              <FormControl>
                <Input type="time" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full">
          Save Preferences
        </Button>
      </form>
    </Form>
  );

  // 👇 Wrap in Card only if not disabled
  return disableCard ? (
    content
  ) : (
    <Card className="max-w-xl mx-auto mt-10 shadow-xl">
      <CardHeader></CardHeader>
      <CardContent>{content}</CardContent>
    </Card>
  );
}

function minutesToTime(mins: number) {
  const h = Math.floor(mins / 60)
    .toString()
    .padStart(2, '0');
  const m = (mins % 60).toString().padStart(2, '0');
  return `${h}:${m}`;
}
