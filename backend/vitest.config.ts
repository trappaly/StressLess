import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'node', // use Node.js environment
    globals: true, // use global variables like `describe`, `it`, `expect`, etc.
  },
});
