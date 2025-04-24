import { Button } from "@/components/ui/button";
import Link from "next/link";

/*
* Creates help button 
*/

export function Help() {
    return (
      <Button asChild variant="ghost" size="icon" aria-label="Help">
        <Link href="/help.md">
          Help
        </Link>
      </Button>
    );
  }