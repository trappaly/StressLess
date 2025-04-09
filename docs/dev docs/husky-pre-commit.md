# 🐶 Husky Pre-commit Hook Guide

## Links

https://typicode.github.io/husky/

### Why We Use Husky

We use **Husky** to help enforce code quality **before code is committed** to the repository. This prevents bad formatting or linting issues from being pushed and keeps our codebase consistent and clean across all contributors.

### What It Does

Currently, our Husky pre-commit hook automatically runs the following commands every time you commit:

```bash
pnpm format
pnpm lint
```

If either command fails, the commit will be **blocked** until the issues are fixed.

### Where It's Configured

The hook lives in:

```bash
.husky/pre-commit
```

### How to Temporarily Turn It Off

You can skip all Husky hooks during a commit by adding the `--no-verify` flag:

```bash
git commit -m "your message" --no-verify
```

This is useful for emergency or experimental commits — but use responsibly!
