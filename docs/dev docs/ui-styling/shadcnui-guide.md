# ShadCN UI Developer Guide

We use [**shadcn/ui**](https://ui.shadcn.dev/) for high-quality, accessible, and customizable components built with Tailwind CSS.

---

## File Structure

After setup, ShadCN components live here:

```
/components
  └── /ui
       ├── button.tsx
       ├── input.tsx
       └── ...etc
```

These are just **headless** and **unstyled** components using Tailwind, so you can extend or theme them freely.

---

## Usage Example

```tsx
import { Button } from "@/components/ui/button"

export default function Example() {
  return <Button variant="outline">Click me</Button>
}
```

Variants like `outline`, `ghost`, `link`, etc. are defined via Tailwind classes.

---

## Styling Components

Every ShadCN component uses a utility called `cn()` (usually found in `lib/utils.ts`) to merge classes conditionally:

```tsx
<button
  className={cn(
    "inline-flex items-center justify-center",
    variant === "outline" && "border"
  )}
>
```

You can **customize or create your own variants** by editing these component files directly.

---

## Extending the Library

To add more components:

```bash
npx shadcn-ui@latest add card
```

Then import like:

```tsx
import { Card, CardContent } from "@/components/ui/card"
```

---

## Tips

- Keep UI consistent by reusing ShadCN components over custom ones.
- You can tweak default colors, radii, etc. by modifying your Tailwind `theme` config.
- Use the [ShadCN site](https://ui.shadcn.dev/docs/components/accordion) as live documentation for examples and props.

---

## Summary

| Feature         | Description                                  |
|-----------------|----------------------------------------------|
| Components      | Headless, styled with Tailwind               |
| Location        | `components/ui/`                             |
| Customizable?   | Fully — tweak Tailwind classes directly      |
| Themeable?      | Yes, via Tailwind config + `@layer` styles   |
