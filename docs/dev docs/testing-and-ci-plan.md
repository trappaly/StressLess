# Vitest Guide 
## What a Developer Needs to Know About Testing and CI (Part 6 of Sprint #2)
# Build Tools: Vite
https://vite.dev/guide/why.html

# Testing Framework: Vitest
https://vitest.dev/guide/

Vitest testing can run tests inside functions. 

## How to Add a New Test to the Code Base
- For Front End
1. Open the relevant `.test.tsx` file in the frontend folder
2. Import the necessary React components that will be tested
3. Use the structure
```typescript
describe('name of suite of tests', () => {
  // group of tests
  it('name of individual test', () => {
    expect(2 + 2).toBe(4);
  });
  it('name of another test', () => {
    expect(2 + 3).toBe(5);
  });
});
```

- For Back End
1. Open the relevant `.spec.ts` file in the backend folder
2. Import the necessary backend functions that will be tested
3. Use the same structure for adding tests.

## Which Tests Will Be Executed in a CI Build 

- We will run all tests with Vitest including unit test and end-to-end tests
- We will execute them in a CI Build 

## How to run tests manually
- Navigate to the `frontend` or `backend` folder.
- Enter `pnpm test` in this folder.

## Which Development Actions Trigger a CI Build
Here’s a cleaner, more polished revision of your section and explanation:

---

## When CI Builds Are Triggered

A Continuous Integration (CI) build is triggered by the following development actions:

- **Pushes** to the `main` or `development` branches
- **Pull requests** targeting `main`, `development`, or any feature branch following the `feat/*` naming convention
- CI will **not** be triggered for changes to markdown files (`*.md`)
- Developers can also **skip CI manually** by including `[ci skip]` or `[skip ci]` in their commit messages

### Vitest has two modes. 
  - The first mode is watch mode which automatically runs all tests when a file is changed
  - The second mode is run mode which executes all of the tests all at once 


### How to Change Between Modes
Watch mode: pnpm --watch
Run mode: pnpm --run

## Other Helpful Info

### Running Tests in Watch Mode 
- pnpm exec vitest testname.test.ts
### Running Only Failed Tests
- pnpm exec --only-failed

