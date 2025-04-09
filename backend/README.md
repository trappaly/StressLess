# Backend

This is the backend for the project. It is built with Node.js and Express.js.

## Technology

- Node.js
- Express.js
- TypeScript
- pnpm

## Prerequisites

- [Node.js](https://nodejs.org/en/)
- [pnpm](https://pnpm.io/) (Use `pnpm` instead of `npm` for commands)

### .env environment variables
- Add a `.env` file into the root of the `backend` directory.
- Enter the following environment variables into `.env` in the below format:
```env
PORT=<Port number used for backend>
PGHOST=<PostgreSQL hostname>
PGDATABASE=<PostgreSQL database name>
PGUSER=<PostgreSQL username>
PGPASSWORD=<PostgreSQL password>

DATABASE_URL=<PostgreSQL connection string>
DIRECT_URL=<Direct URL to your Neon database>
```

Configure Firebase auth:

In `src/serviceAccountKey.ts`, add the path to your Firebase service account key JSON file. This file is used to authenticate with Firebase services.
You can find the file here https://www.notion.so/Secrets-1c581728581b807fb0e9cbce78d5daeb

## Getting Started

1. Install dependencies

```bash
pnpm install
```

2. Run code formatter

```bash
pnpm format
```

3. Start the server locally

```bash
pnpm start
```
