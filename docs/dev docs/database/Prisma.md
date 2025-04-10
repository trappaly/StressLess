# Prisma Guide

## 1. **Regenerate Prisma Client**
To regenerate the Prisma Client after making changes to your schema, run the following command:

```bash
pnpm exec prisma generate
```

This will regenerate the Prisma Client based on the current schema.

## 2. **Migrate Database**
To apply migrations to your database, first make sure your Prisma schema is up to date with the changes you want. Then, run:

```bash
pnpm exec prisma migrate dev
```

This will apply any pending migrations to your database and regenerate the Prisma Client.

## 3. **Check Database Schema**
To check the current state of your database schema in comparison to your Prisma schema, use:

```bash
pnpm exec prisma migrate status
```

## 4. **Create a New Migration**
If you’ve made changes to your Prisma schema (e.g., added a new model or updated a field) and need to create a migration:

```bash
pnpm exec prisma migrate dev --name your-migration-name
```

Replace `your-migration-name` with a descriptive name for the migration (e.g., `add-new-model`).

## 5. **Reset Database (for Development)**
If you want to reset your database (useful during development), you can run:

```bash
pnpm exec prisma migrate reset
```

This will drop and recreate your database, applying all migrations from scratch.

## 6. **Inspect Your Prisma Schema**
To inspect your schema in a human-readable format, run:

```bash
pnpm exec prisma studio
```

This will open Prisma Studio, which provides a GUI to view and interact with your database.

## 7. **Generate Prisma Client in Production**
To regenerate the Prisma Client in a production environment, use:

```bash
pnpm exec prisma generate --production
```

This ensures that Prisma Client is optimized for production environments.

## 8. **View Logs**
To see more detailed logs while running Prisma commands, use:

```bash
DEBUG="*" pnpm exec prisma <command>
```

For example:

```bash
DEBUG="*" pnpm exec prisma migrate dev
```

---

This guide provides a quick overview of common Prisma commands to regenerate the client, apply migrations, and interact with your database.
