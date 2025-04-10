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
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { UserPreferencesForm } from "./UserPreferencesForm";
import { FormEvent } from "react";
// replace with u
type UserPreferences = {
  username: string;
  productiveTime: [number, number]; // in minutes
  workDuration: number; // in minutes
  sleepHours: number;
  startTime: string; // "HH:mm"
  endTime: string;
};

const mockUserData: UserPreferences = {
  username: "Cheyanne Vinscon",
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
  const data = mockUserData; // Replace this with actual data

  
  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    throw new Error("Function not implemented yet.");
  }

  return (
  <div className="min-h-screen flex items-center justify-center">
    <div className="max-w-xl w-full p-8 space-y-6 flex flex-col items-center">
      {/* User Icon */}
      <div className="mx-auto p-9 bg-muted rounded-full w-fit">
        <UserIcon className="w-16 h-16 text-muted-foreground" />
      </div>
  
      {/* Username */}
      <h1 className="text-2xl font-bold">{data.username}</h1>
  
      {/* Preferences */}
      <div className="space-y-3 text-lg">
        <div>
          <span className="font-medium"> Your most productive times:</span>{" "}
          {formatTime(data.productiveTime[0])} – {formatTime(data.productiveTime[1])}
        </div>
        <div>
          <span className="font-medium">Your preference on work duration:</span>{" "}
          {data.workDuration} minutes
        </div>
        <div>
          <span className="font-medium"> Sleep Hours:</span>{" "}
          {data.sleepHours} hrs
        </div>
        <div>
          <span className="font-medium">Work Start Time:</span>{" "}
          {data.startTime}
        </div>
        <div>
          <span className="font-medium">Work End Time:</span>{" "}
          {data.endTime}
        </div>
      </div>
    {/* Edit Button + Dialog */}
    <div className="flex mt-8"> 
    <Dialog>
      <DialogTrigger asChild>
      <Button className="bg-blue-600 text-white hover:bg-blue-700 cursor-pointer">Edit Preferences</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit preferences</DialogTitle>
          <DialogDescription>
            Make changes to your preferences here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}></form>
        < UserPreferencesForm />
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  </div>
  </div>
  </div>
  
  );
}