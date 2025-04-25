'use client';

import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import '../styles/globals.css';
import React from 'react';
import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/components/Header';
import { AuthProvider } from '@/components/context/auth/AuthContext';
const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});
import { useRouter, usePathname } from 'next/navigation';
import ProtectedRoute from '@/components/ui/ProtectedRoutes';

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'StressLess Smart Calendar App',
  description:
    'Welcome to StressLess, your smart schedule designed to help you stay productive without burning out.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  const isPublicRoute = pathname === '/'; // add more public routes here if needed

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            {isPublicRoute ? (
              <main>{children}</main>
            ) : (
              <ProtectedRoute>
                <main>{children}</main>
              </ProtectedRoute>
            )}
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
