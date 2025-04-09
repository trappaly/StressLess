'use client';

import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ModeToggle() {
  const { theme, setTheme } = useTheme(); // manages the theme

  return (
    <Button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="cursor-pointer"
    >
      {theme === 'dark' ? (
        <Sun className="h-[1.2rem] w-[1.2rem]" />
      ) : (
        <Moon className="h-[1.2rem] w-[1.2rem]" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
