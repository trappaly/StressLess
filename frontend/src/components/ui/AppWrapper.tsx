'use client';

import { usePathname } from 'next/navigation';
import ProtectedRoute from '@/components/ui/ProtectedRoutes';

export default function AppWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const isPublicRoute = pathname === '/'; // extend with more if needed

  return (
    <>
      {isPublicRoute ? (
        <main>{children}</main>
      ) : (
        <ProtectedRoute>
          <main>{children}</main>
        </ProtectedRoute>
      )}
    </>
  );
}
