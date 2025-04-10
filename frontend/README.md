# Frontend

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app) using the new **App Router**. We use modern tooling such as `pnpm`, `TypeScript`, `shadcn/ui`, and `Vitest` to ensure fast and reliable development.

---

## 🧭 Project Structure

```
frontend/
├── public/                  # Static assets served as-is
│   ├── favicon.ico
│   ├── manifest.json
│   └── ...
├── src/
│   ├── app/                 # App directory (Next.js App Router)
│   │   ├── calendar/        # Route: /calendar
│   │   ├── dashboard/       # Route: /dashboard
│   │   ├── preference/      # Route: /preference
│   │   ├── layout.tsx       # Root layout for all routes
│   │   └── page.tsx         # Homepage route: /
│   ├── components/          # Shared UI components (custom + shadcn/ui)
│   ├── lib/                 # Client-side utility functions, hooks, helpers
│   ├── styles/              # Global and modular styles
│   └── tests/               # Unit/component tests
├── .gitignore
├── package.json
├── pnpm-lock.yaml
├── tsconfig.json
├── next.config.ts
├── eslint.config.mjs
├── postcss.config.mjs
├── vitest.config.ts
├── vitest.setup.ts
└── README.md
```

---

## Getting Started

First, install dependencies:

```bash
pnpm install
```

Then, run the development server:

```bash
pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the app.

---

## UI Components: `shadcn/ui`

We use [**shadcn/ui**](https://ui.shadcn.com) for modern, accessible, and themeable React components, built on top of [Radix UI](https://www.radix-ui.com/).

You can customize, extend, and scaffold new components with the CLI:

```bash
pnpm shadcn-ui@latest add button
```

All components live under `src/components/ui/`.

---

## Creating a New Page

Next.js uses **file-based routing**, meaning:

- A new folder inside `src/app/` becomes a **route**.
- `page.tsx` inside that folder becomes the page content.
- `layout.tsx` defines layout and shared UI (like navbars) for that section.

### Example: Add `/settings` Page

```bash
mkdir src/app/settings
touch src/app/settings/page.tsx
```

```tsx
// src/app/settings/page.tsx
export default function SettingsPage() {
  return <div>Settings Page</div>;
}
```

Now visit: `http://localhost:3000/settings`

---

## Understanding `layout.tsx`, `page.tsx`, and `'use client'`

| File         | Purpose                                                                 |
|--------------|-------------------------------------------------------------------------|
| `layout.tsx` | Wraps all pages inside a route. Use for shared UI like headers/footers. |
| `page.tsx`   | The actual page component rendered for the route.                       |
| `'use client'` | Used at the top of a file when you need React client-side features like hooks, event handlers, or state. |

```tsx
'use client';

import { useState } from 'react';

export default function MyClientPage() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;
}
```

---

## 🎨 Fonts

We're using [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) with [Geist](https://vercel.com/font) from Vercel, which is optimized and automatically loaded.

---

## Testing

We use [Vitest](https://vitest.dev/) for fast unit tests.

```bash
pnpm run test
```

Test files are in `src/tests/`.

---

## 📚 Learn More

- [Next.js Docs](https://nextjs.org/docs)
- [Next.js Learn](https://nextjs.org/learn)
- [App Router Overview](https://nextjs.org/docs/app/building-your-application/routing)
- [shadcn/ui](https://ui.shadcn.com/docs)
