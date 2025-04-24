// app/help/page.tsx
import fs from 'fs';
import path from 'path';
import { marked } from 'marked';

export default function HelpPage() {
  const filePath = path.join(process.cwd(), 'src', 'app', 'help', 'help.md');
  const fileContent = fs.readFileSync(filePath, 'utf8');
const html = marked(fileContent);

return (
  <main className="p-8">
    <div dangerouslySetInnerHTML={{ __html: html }} />
  </main>
);
}

