// components/Header.tsx
import { ModeToggle } from '@/components/ModeToggle';
import { Help } from '@/components/help'; // Import Help button
import { Button } from '@/components/ui/button';

export default function Header() {
  return (
    <header className="fixed top-4 right-4 z-50 flex gap-2">
      {/* Help Button */}
      <Help />

      {/* Dark/Light Mode Toggle */}
      <ModeToggle />
    </header>
  );
}
