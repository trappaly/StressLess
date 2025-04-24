// components/Header.tsx
import { ModeToggle } from '@/components/ModeToggle';
import { Help } from '@/components/Help'; // Import Help button

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
