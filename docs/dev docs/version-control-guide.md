# Version Control Guide

This guide explains how our team uses Git and GitHub to collaborate effectively and keep our codebase organized and stable.

---

### Branching Strategy

We use the following core branches:

- `main` – stable, production-ready code.
- `development` – integration branch for features and fixes. Everything gets merged here **before** going to `main`.

### Feature & Fix Branches

When working on a task, always branch off of `development`:

```bash
git checkout development
git pull
git checkout -b feat/your-feature-name
```

Use these naming conventions:

- `feat/*` – for new features
- `fix/*` – for bug fixes

---

### Pull Request Workflow

1. **Push your branch** to GitHub and open a **Pull Request** into `development`.
2. **Request reviews** from teammates.
3. Collaborate on feedback — both the author and reviewer should work together to resolve comments.
4. ✅ Only approve and merge if:
    - CI passes (green build).
    - The branch is up to date with `development`.
5. Once `development` is stable and ready for release, create a PR into `main`.

---

### CI Requirements

CI will automatically run on:
- Pushes to `main` or `development`
- Pull Requests targeting `main` or `development`

> PRs **must not** be approved or merged unless all checks pass.

---

### Reminders

- Keep commits clean and meaningful.
- Rebase or merge `development` regularly to resolve conflicts early.
- Don’t force-push to shared branches (`main`, `development`).
