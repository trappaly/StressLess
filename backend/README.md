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
```

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

## .env environment variables
- `PORT`: The port used for the backend.
