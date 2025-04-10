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
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const formSchema = z
  .object({
    productiveTime: z
      .tuple([z.number(), z.number()])
      .refine(([start, end]) => end > start, {
        message: 'End must be after start',
      }),
    workDuration: z
      .number({ invalid_type_error: 'Please enter a valid number of minutes' })
      .min(1, 'Work duration must be at least 1 minute')
      .max(240, 'Keep it under 4 hours for wellness!'),

    sleepHours: z
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

export function UserPreferencesForm() {
  const router = useRouter();

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
    let outputs = [];
    for (const question in values) {
      outputs.push({
        question_text: question,
        answer: String(values[question as keyof z.infer<typeof formSchema>]),
      });
    }
    console.log(outputs);
    // Send the data to our backend
    axios
      .post('/surveyresults/placeholder-user-id', values)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    // TODO: for now, we just gonna route to dashboard upon click
    router.push('/dashboard');
  }

  return (
    <Card className="max-w-xl mx-auto mt-10 shadow-xl">
      <CardHeader>
        <CardTitle>User Preferences</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Productive Time */}
            <FormField
              control={form.control}
              name="productiveTime"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Most Productive Time</FormLabel>
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
                  <FormDescription>
                    What time of day are you the most productive?
                  </FormDescription>
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
                  <FormControl>
                    <Input placeholder="e.g., 3" {...field} />
                  </FormControl>
                  <FormDescription>
                    How long do you want to work?
                  </FormDescription>
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
                  <FormLabel>Preferred Sleep Time</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      step="0.5"
                      placeholder="8"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Used to avoid scheduling anything too late.
                  </FormDescription>
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
                  <FormControl>
                    <Input type="time" {...field} />
                  </FormControl>
                  <FormDescription>
                    Enter a time like 09:00 (24hr)
                  </FormDescription>
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
                  <FormControl>
                    <Input type="time" {...field} />
                  </FormControl>
                  <FormDescription>Must be after start time</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full">
              Save Preferences
            </Button>
          </form>
        </Form>
      </CardContent>
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
