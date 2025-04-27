'use client';
import { HelpCircle } from 'lucide-react'; // Import the Help Circle icon
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

export const Help = () => {
  const [showHelp, setShowHelp] = useState(false);
  const [markdown, setMarkdown] = useState('');
  const [currentPage, setCurrentPage] = useState('');

  useEffect(() => {
    // Determine the current page based on the URL
    const path = window.location.pathname;
    console.log('Current path: ', path);
    //  setCurrentPage(path === '/' ? 'Home' : path.replace('/', ''));
    if (showHelp && !markdown) {
      fetch('/help.md')
        .then((res) => res.text())
        .then((text) => setMarkdown(text));
    }
  }, [showHelp]);

  // Extract the section based on custom tags
  const getSection = () => {
    const regex = new RegExp(
      `<!-- Section: ${currentPage} -->(.*?)(?=<!-- Section:|$)`,
      's'
    );
    console.log('current zection: ', regex);
    const match = markdown.match(regex);
    console.log('match here: ', match);
    return match ? match[1].trim() : 'Section not found.';
  };

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="icon"
        aria-label="Help"
        onClick={() => setShowHelp((prev) => !prev)}
      >
        <HelpCircle className="w-8 h-8 text-muted-foreground hover:text-foreground" />
      </Button>

      {showHelp && (
        <div className="absolute right-0 mt-2 w-[400px] max-h-[400px] overflow-auto bg-white dark:bg-zinc-900 text-sm p-4 shadow-xl border rounded-lg z-50 prose prose-sm dark:prose-invert">
          <ReactMarkdown>{getSection()}</ReactMarkdown>
        </div>
      )}
    </div>
  );
};
