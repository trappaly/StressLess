'use client';

import { LogOut } from 'lucide-react';
import { useRouter } from 'next/navigation';
import {
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from '../sidebar';
import { useAuth } from '@/components/context/auth/AuthContext';

export default function SignOutForm() {
  const router = useRouter();
  const { signOut, loading } = useAuth();

  const handleSignOut = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signOut();
      router.push('/');
    } catch (error: unknown) {
      console.log(error);
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <SidebarFooter>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton onClick={handleSignOut}>
            <LogOut /> Sign out
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarFooter>
  );
}
