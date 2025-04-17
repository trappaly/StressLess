'use client';
import { EditIcon, UserIcon } from 'lucide-react';
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
import { useEffect, useState } from 'react';
import { z } from 'zod';
import { useAuth } from '@/components/context/auth/AuthContext';
import axios from 'axios';
import { backendBaseUrl, formatTime } from '@/lib/utils';
import { getPreferenceExtractData } from '@/lib/get-preference-extract-data';
import { updateProfile } from 'firebase/auth';

// Mock Data
const mockUserData = {
  productiveTime: [540, 720],
  workDuration: 60,
  sleepHours: 8,
  startTime: '09:00',
  endTime: '17:00',
};

export default function ProfilePage() {
  const { user, loading } = useAuth();
  // Using state to hold user preferences
  const [userPreferences, setUserPreferences] = useState<ReturnType<
    typeof getPreferenceExtractData
  > | null>(null);
  // Using state to open page
  const [open, setOpen] = useState(false);
  // Using state to set edit username
  const [editMode, setEditMode] = useState(false);
  // Using state to set display name
  const [displayName, setDisplayName] = useState(
    user?.displayName || 'Studious Student'
  );

  // Fetch preferences when user is available
  useEffect(() => {
    const fetchPreferences = async () => {
      try {
        if (!user?.uid) return;

        const res = await axios.get(
          backendBaseUrl + `/api/user/surveyresults/${user.uid}`
        );

        const extractedData = getPreferenceExtractData(res.data);
        setUserPreferences(extractedData);
      } catch (err) {
        console.error('Failed to fetch user preferences:', err);
      }
    };

    if (!loading && user) {
      fetchPreferences().then();
    }
  }, [user, loading]);

  // Handle the edit name logic
  function handleEditName() {
    setEditMode(true);
  }

  // Handle the save preference logic
  function handleSavePreferences(values: z.infer<typeof formSchema>): void {
    console.log('Updated preferences:', values);
    // TODO: Need to update the preferences in the backend. Use PUT instead of POST
    // const outputs = [];
    // for (const question in values) {
    //   outputs.push({
    //     question_text: question,
    //     answer: String(values[question as keyof z.infer<typeof formSchema>]),
    //   });
    // }
    // console.log(outputs);
    // // Send the data to our backend
    // if (!user?.uid) return;
    //
    // axios
    //   .post(backendBaseUrl + `/api/user/surveyresults/${user.uid}`, outputs)
    //   .then((response) => {
    //     console.log('Successfully posted answers for user: ', user!.uid);
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    // Update state of user preference
    setUserPreferences(values);
    // Close the dialog after save
    setOpen(false);
  }

  if (loading || !userPreferences) {
    return <div>Loading...</div>;
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
        <div className="flex items-center space-x-2">
          {editMode ? (
            <input
              type="text"
              className="text-3xl font-bold bg-transparent border-b border-gray-400 dark:border-gray-600 focus:outline-none focus:border-pink-500 text-gray-900 dark:text-white"
              value={displayName}
              onChange={async (e) => {
                setDisplayName(e.target.value);
                await updateProfile(user!, {
                  displayName: e.target.value,
                });
              }}
              onBlur={() => setEditMode(false)}
              autoFocus
            />
          ) : (
            <>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                {displayName}
              </h1>
              <button
                onClick={() => setEditMode(true)}
                className="text-gray-500 hover:text-pink-500"
                aria-label="Edit Name"
              >
                <EditIcon className="w-4 h-4" />
              </button>
            </>
          )}
        </div>

        {/*<h1 className="text-3xl font-bold text-gray-900 dark:text-white">*/}
        {/*  {displayName}*/}
        {/*</h1>*/}

        {/*<div>*/}
        {/*  <EditIcon className="w-20 h-20 text-gray-700 dark:text-gray-200" />*/}
        {/*</div>*/}

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
