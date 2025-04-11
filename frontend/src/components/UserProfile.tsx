// app/profile/page.tsx
'use client';
import { UserIcon } from "lucide-react";
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { UserPreferencesForm, formSchema } from "./UserPreferencesForm";
import { useState } from "react";
import { z } from "zod";

// Mock Data
const mockUserData = {
  productiveTime: [540, 720],
  workDuration: 60,
  sleepHours: 8,
  startTime: '09:00',
  endTime: '17:00',
};

function formatTime(minutes: number) {
  const h = Math.floor(minutes / 60).toString().padStart(2, '0');
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
  <div className="min-h-screen flex items-center justify-center">
    <div className="max-w-xl w-full p-8 space-y-6 flex flex-col items-center">
      {/* User Icon */}
      <div className="mx-auto p-9 bg-muted rounded-full w-fit">
        <UserIcon className="w-16 h-16 text-muted-foreground" />
      </div>
  
      {/* Username */}
      <h1 className="text-2xl font-bold">{"Cheyanne Vinscon"}</h1>
  
      {/* Preferences */}
      <div className="space-y-3 text-lg">
        <div>
          <span className="font-medium"> Your most productive times:</span>{" "}
          {formatTime(userPreferences.productiveTime[0])} – {formatTime(userPreferences.productiveTime[1])}
        </div>
        <div>
          <span className="font-medium">Your preference on work duration:</span>{" "}
          {userPreferences.workDuration} minutes
        </div>
        <div>
          <span className="font-medium"> Sleep Hours:</span>{" "}
          {userPreferences.sleepHours} hrs
        </div>
        <div>
          <span className="font-medium">Work Start Time:</span>{" "}
          {userPreferences.startTime}
        </div>
        <div>
          <span className="font-medium">Work End Time:</span>{" "}
          {userPreferences.endTime}
        </div>
      </div>
    {/* Edit Button + Dialog */}
    <div className="flex mt-8"> 
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
      <Button className="bg-blue-600 text-white hover:bg-blue-700 cursor-pointer">Edit Preferences</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Edit preferences</DialogTitle>
          <DialogDescription>
            Make changes to your preferences here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        
        < UserPreferencesForm onSave={handleSavePreferences}/>
      </DialogContent>
    </Dialog>
  </div>
  </div>
  </div>
  
  );
}