import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const backendBaseUrl =
  process.env.NEXT_PUBLIC_BACKEND_BASE_URL || 'http://localhost:3001';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatTime(minutes: number) {
  const h = Math.floor(minutes / 60)
    .toString()
    .padStart(2, '0');
  const m = (minutes % 60).toString().padStart(2, '0');
  return `${h}:${m}`;
}

// minutetoTime return function in AM/PM format
export function minutesToTime(mins: number) {
  const hours24 = Math.floor(mins / 60);
  const minutes = mins % 60;
  const hours12 = hours24 % 12 || 12; // converts 0 -> 12, 13 -> 1
  const ampm = hours24 < 12 ? 'AM' : 'PM';
  return `${hours12}:${minutes.toString().padStart(2, '0')} ${ampm}`;
}
