# EXPLAIN FRONTEND GLOBAL STYLING

This project uses **Tailwind CSS** with extended theme customization and dark mode support for a cohesive and scalable design system.

---

## Tools & Imports

In the global CSS (`globals.css`), we import essential utilities:

```css
@import "tailwindcss";
@import "tw-animate-css";

@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

## Dark Mode

We define a custom variant for dark mode:

```css
@custom-variant dark (&:is(.dark *));
```

Use `class="dark"` on the root element to enable dark mode.

---

## Theme Configuration

We extend Tailwind’s theme using CSS custom properties, scoped with `@theme inline`. This provides consistent naming and access to design tokens like:

- `--color-primary`
- `--color-background`
- `--font-sans`
- `--radius-md`
- `--chart-*` (for charts and graphs)

These values are defined in both `:root` (light mode) and `.dark` (dark mode) for adaptive styling.

---

## Base Layer Styling

We use Tailwind's `@layer base` to apply default styles:

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

This sets a solid foundation for consistent typography, layout, and accessibility.

---

## Best Practices

- Use `bg-[theme-token]` and `text-[theme-token]` classes for consistency.
- Prefer using custom properties (`--color-*`) inside components when Tailwind classes don’t fit the context.
- Always test in both light and dark modes.

---

## Structure Reference

Keep all theme-related styling inside a global stylesheet (e.g., `globals.css` or `theme.css`), imported via your `layout.tsx`.