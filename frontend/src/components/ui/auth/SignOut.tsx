//To-Do: Replace with proper signout authentication.
'use client';
import { LogOut } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { SidebarFooter, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from '../sidebar';

export default function SignOutForm() {
    const router = useRouter();
    
    const handleSignOut = async (e: React.FormEvent) => {
        e.preventDefault();
    
        router.push('/');
    };
    
    return(
      <SidebarFooter>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton
          onClick={handleSignOut}>
            <LogOut /> Sign out
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarFooter>
    );
}