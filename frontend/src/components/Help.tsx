import { HelpCircle } from 'lucide-react'; // Import the Help Circle icon
import { Button } from "@/components/ui/button";
import Link from "next/link";


export function Help() {
  return (
    <Link href="/help" passHref>
      <Button variant="ghost" size="icon" aria-label="Help">
        <HelpCircle className="w-5 h-5 text-muted-foreground hover:text-foreground" />
      </Button>
    </Link>
  );
}