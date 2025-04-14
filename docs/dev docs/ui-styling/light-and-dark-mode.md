# Dark & Light Mode Styling Guide

Our app uses Tailwind CSS and CSS variables to support both **Dark and Light** themes using the `.dark` class strategy. Here's how to make new pages and components that automatically adapt to theme changes.

---

## Base Setup Recap

Dark mode is toggled by adding the `.dark` class to the `<html>` element. Tailwind's `dark:` modifier and our `@theme inline` variables ensure everything updates accordingly.

Your global theme styles are declared like this:

```css
@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  ...
}
```

---

## How to Use Theme-Aware Colors

Use Tailwind utility classes that are mapped to our custom properties:

| Utility             | Description              |
|---------------------|--------------------------|
| `bg-background`     | Page/component background |
| `text-foreground`   | Primary readable text     |
| `border-border`     | Border color              |
| `ring-ring`         | Focus/outline ring        |

These classes will automatically update when the theme changes.

---

## Example Component (Theme-Aware)

```tsx
export default function Example() {
  return (
    <div className="bg-background text-foreground min-h-screen flex items-center justify-center">
      <h1 className="text-4xl font-bold">This works in both themes!</h1>
    </div>
  );
}
```

---

## When to Use `dark:` Utility

Use `dark:` **only for exceptions** or manual overrides. Otherwise, prefer theme tokens.

```tsx
<p className="text-black dark:text-white">
  This is a manual color override.
</p>
```

But prefer:

```tsx
<p className="text-foreground">
  This is theme-safe and auto-updates.
</p>
```

---

## Pro Tips

- Always use `bg-background`, `text-foreground`, `border-border`, etc. instead of hardcoded color names like `bg-white` or `text-black`.
- Avoid hardcoded hex or color values in JSX/Tailwind unless you're intentionally breaking from theme.
- Don’t forget `@layer base` applies defaults:

```css
@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  body {
    @apply bg-background text-foreground;
  }
}
```