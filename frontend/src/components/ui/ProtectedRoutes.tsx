'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { useAuth } from '@/components/context/auth/AuthContext';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Only redirect if not loading and no user
    if (!loading && !user && pathname !== '/') {
      router.push('/');
    }
  }, [user, loading, pathname, router]);

  if (loading || (!user && pathname !== '/')) {
    return <div className="text-center p-8">Loading...</div>;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
