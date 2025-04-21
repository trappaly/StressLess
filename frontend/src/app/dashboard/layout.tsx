import { cookies } from "next/headers"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

export default async function Layout({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies()
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true"

  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <div className="flex h-screen w-full"> {/* Add this flex container */}
        <AppSidebar />
        <main className="flex-1 overflow-auto"> {/* Make main take remaining space */}
         <SidebarTrigger /> 
          {children}
        </main>
      </div>
    </SidebarProvider>
  )
}