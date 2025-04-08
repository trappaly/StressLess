import { AuthProvider } from '@/components/context/auth/AuthContext';
import { ThemeProvider } from '@/components/theme-provider';
import { ModeToggle } from '@/components/ModeToggle';
import { Geist } from 'next/font/google';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AuthProvider>{children} </AuthProvider>
          <ModeToggle />
        </ThemeProvider>
      </body>
    </html>
  );
}
