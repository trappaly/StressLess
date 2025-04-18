'use client';
import ProfilePage from '@/components/UserProfile';
// Authenticated pages
// are protected by the middleware
export default function Dashboard() {
  return <ProfilePage />;
}
