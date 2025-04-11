'use client'

import { UserIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { UserPreferencesForm, formSchema } from './UserPreferencesForm'
import { useState } from 'react'
import { z } from 'zod'
import { toast } from 'sonner'

// Mock user data (replace w/ real data later)
const mockUserData = {
  productiveTime: [600, 820],
  workDuration: 40,
  sleepHours: 7,
  startTime: '08:00 AM',
  endTime: '6:00 PM',
}

function formatTime(minutes: number): string {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  const ampm = h >= 12 ? 'PM' : 'AM';
  const hour12 = h % 12 || 12;
  return `${hour12}:${m.toString().padStart(2, '0')} ${ampm}`;
}

export default function ProfilePage() {
  const [userPreferences, setUserPreferences] = useState(mockUserData)
  const [open, setOpen] = useState(false)

  function handleSavePreferences(values: z.infer<typeof formSchema>) {
    setUserPreferences(values)
    setOpen(false)
    toast('Preferences saved!')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-indigo-200 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-200 font-sans">
    <div className="min-h-screen px-4 py-12 bg-muted/40 dark:bg-[#111827] text-gray-800 dark:text-gray-100 font-sans">
      <div className="max-w-2xl mx-auto space-y-10">
        {/* Header */}
        <div className="flex items-center gap-4">
          <div className="p-3 bg-muted rounded-full shadow-sm">
            <UserIcon className="w-8 h-8 text-gray-700 dark:text-gray-300" />
          </div>
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">Your Profile</h1>
            <p className="text-sm text-muted-foreground">Manage your preferences and daily rhythm</p>
          </div>
        </div>

        {/* Preferences Summary */}
        <div className="bg-white dark:bg-muted rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm p-6 space-y-6">
          <div>
            <h2 className="text-lg font-medium mb-2">Current Preferences</h2>
            <ul className="space-y-3 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
              <li>
                <span className="font-semibold">Productive Hours:</span>{' '}
                {formatTime(userPreferences.productiveTime[0])} –{' '}
                {formatTime(userPreferences.productiveTime[1])}
              </li>
              <li>
                <span className="font-semibold">Work Session Length:</span>{' '}
                {userPreferences.workDuration} minutes
              </li>
              <li>
                <span className="font-semibold">Sleep Goal:</span>{' '}
                {userPreferences.sleepHours} hours
              </li>
              <li>
                <span className="font-semibold">Workday:</span>{' '}
                {userPreferences.startTime} – {userPreferences.endTime}
              </li>
            </ul>
          </div>

          {/* Edit Button + Dialog */}
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button className="w-full sm:w-auto mt-2 cursor-pointer" variant="default">
                Edit Preferences
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[480px] max-h-[85vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Edit Preferences</DialogTitle>
                <DialogDescription>
                  Adjust your productivity and scheduling habits.
                </DialogDescription>
              </DialogHeader>
              <UserPreferencesForm onSave={handleSavePreferences} disableCard />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
    </div>
  )
}
