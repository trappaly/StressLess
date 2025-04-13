'use client';
import { UserIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { UserPreferencesForm, formSchema } from './UserPreferencesForm';
import { useState } from 'react';
import { z } from 'zod';

// Mock Data
const mockUserData = {
  productiveTime: [540, 720],
  workDuration: 60,
  sleepHours: 8,
  startTime: '09:00',
  endTime: '17:00',
};

function formatTime(minutes: number) {
  const h = Math.floor(minutes / 60)
    .toString()
    .padStart(2, '0');
  const m = (minutes % 60).toString().padStart(2, '0');
  return `${h}:${m}`;
}

export default function ProfilePage() {
  // Using state to hold user preferences
  const [userPreferences, setUserPreferences] = useState(mockUserData); // Replace this with actual data
  // Using state to open page
  const [open, setOpen] = useState(false);

  // Handle the save preference logic
  function handleSavePreferences(values: z.infer<typeof formSchema>): void {
    console.log('Updated preferences:', values);

    // Update state of user preference
    setUserPreferences(values);
    // Close the dialog after save
    setOpen(false);
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden font-sans">
      {/* Background split: top pink, bottom white */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-purple-50 dark:bg-[#1a1a2e] z-0" />
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-white dark:bg-[#1a1a2e] z-0" />

      {/* Profile Card */}
      <div className="relative z-10 max-w-3xl w-full mx-4 bg-white dark:bg-gray-900 rounded-3xl shadow-xl p-10 flex flex-col items-center gap-6 border dark:border-gray-700">
        {/* User Icon */}
        <div className="p-4 bg-white dark:bg-gray-800 rounded-full shadow-lg -mt-24">
          <UserIcon className="w-20 h-20 text-gray-700 dark:text-gray-200" />
        </div>

        {/* User Name */}
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Julie
        </h1>

        {/* User Preferences */}
        <div className="w-full space-y-4 text-gray-700 dark:text-gray-300 text-lg">
          <div>
            <span className="font-semibold">Your most productive times:</span>{' '}
            {formatTime(userPreferences.productiveTime[0])} –{' '}
            {formatTime(userPreferences.productiveTime[1])}
          </div>
          <div>
            <span className="font-semibold">
              Your preference on work duration:
            </span>{' '}
            {userPreferences.workDuration} minutes
          </div>
          <div>
            <span className="font-semibold">Sleep Hours:</span>{' '}
            {userPreferences.sleepHours} hrs
          </div>
          <div>
            <span className="font-semibold">Work Start Time:</span>{' '}
            {userPreferences.startTime}
          </div>
          <div>
            <span className="font-semibold">Work End Time:</span>{' '}
            {userPreferences.endTime}
          </div>
        </div>

        {/* Edit Button + Dialog */}
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button className="bg-pink-400 hover:bg-pink-500 text-white">
              Edit Preferences
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px] max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Edit Preferences</DialogTitle>
              <DialogDescription>
                Make changes to your preferences here. Click save when
                you&apos;re done.
              </DialogDescription>
            </DialogHeader>
            <UserPreferencesForm onSave={handleSavePreferences} disableCard />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
