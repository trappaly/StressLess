'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { useAuth } from '@/components/context/auth/AuthContext';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { verified, loading } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Only redirect if not loading and no user
    if (!loading && !verified && pathname !== '/') {
      router.push('/');
    }
  }, [verified, loading, pathname, router]);

  if (loading || (!verified && pathname !== '/')) {
    return <div className="text-center p-8">Loading...</div>;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
