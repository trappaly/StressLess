// components/Header.tsx
import { ModeToggle } from '@/components/ModeToggle';

export default function Header() {
  return (
    <header className="fixed top-4 right-4 z-50">
      <ModeToggle />
    </header>
  );
}
