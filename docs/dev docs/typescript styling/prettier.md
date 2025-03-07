# Prettier Guide

## **Prettier vs. ESLint**

### **ESLint**

- A **linter** that enforces coding standards and best practices.
- Finds **potential errors** (e.g., undefined variables, unused imports).
- Can **auto-fix** some issues but primarily focuses on code quality.

### **Prettier**

- A **code formatter** that ensures consistent styling.
- Handles **whitespace, indentation, semicolons, quotes**, etc.
- **Does not** enforce coding standards like ESLint—only formatting.

👉 **We use both!** ESLint ensures best practices, while Prettier keeps our code neatly formatted.

---

## **Integrating Prettier into Your IDE**

For the best experience, configure your IDE to run **Prettier on save**:

🔗 [Official Prettier IDE Setup Guide](https://prettier.io/docs/editors)

### **VS Code**

1. Install the **Prettier - Code formatter** extension.
2. Open **Settings** (`Ctrl + ,` or `Cmd + ,` on Mac).
3. Search for `"formatOnSave"` and enable:
   ```json
   "editor.formatOnSave": true
   ```
4. Set Prettier as the default formatter:
   ```json
   "[typescriptreact]": {
     "editor.defaultFormatter": "esbenp.prettier-vscode"
   }
   ```

### **WebStorm / JetBrains IDEs**

1. Go to **Preferences > Languages & Frameworks > JavaScript > Prettier**.
2. Set the **Prettier package** to your project’s `node_modules/prettier`.
3. Enable **"Run Prettier on Save"**.

### **Other IDEs**

Refer to the [Prettier Docs](https://prettier.io/docs/editors) for setup instructions.

---

## **Manually Running Prettier**

If you need to format all files manually, run:

```sh
pnpm format
```

This will apply Prettier formatting across the entire project. This ensures our codebase stays clean and readable without manual effort. Make sure to run this before committing your changes!