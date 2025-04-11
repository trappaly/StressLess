# Backend

This is the backend for the project. It is built with Node.js and Express.js.

## Technology

- Node.js
- Express.js
- TypeScript
- pnpm
- Prisma

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

The file `backend/serviceAccountKey.json` is the Firebase service account key JSON.
An example is provided. This file is used to authenticate with Firebase services.
Ask a team member for the content of this file.

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

### Setting Up the Database

### Getting Onboard with Neon (Our Database)
1. Ensure that you have Node.js, pnpm, and Homebrew installed.
2. Create a Neon database account (you can just simply create a Neon database account by using your GitHub account).
3. Ask Madel to add you to the StressLess Neon database. (Optional: For testing, you can use ThunderClient, which you can easily download on VSCode under Extensions.)
4. Install Neon on your system by running the command 
```bash
pnpm install -g neonctl
```
5. Run 
```bash
neon auth
```
6. Make sure your .env file in the root is updated accordingly.

### Installing Prisma Client (Tool Used to Access Our Database Neon)

```bash
pnpm exec prisma generate
```

For more information on **Prisma**, check out [Prisma Guide](./docs/dev%20docs/database/Prisma.md)