# Contributing

We welcome contributions! To get started:

#### Step 1: Fork the Repository

Click the **Fork** button in the top right corner of [this repo](https://github.com/StressLess-Team/StressLess/) to create your own copy under your GitHub account.

#### Step 2: Clone Your Fork

```bash
git clone https://github.com/<your-username>/StressLess.git
cd StressLess
```

#### Step 3: Set Up the Remote

Set the original repository as the upstream remote to pull in future changes:

```bash
git remote add upstream https://github.com/StressLess-Team/StressLess/
git fetch upstream
```

#### Step 4: Create a New Branch

Always work in a new branch for your feature or fix:

```bash
git checkout -b feat/your-feature-name
```

#### Step 5: Make Changes Locally

Edit the code, commit your changes:

```bash
git add .
git commit -m "Add: brief description of what you changed"
```

Follow the [Prettier](docs/dev%20docs/typescript%20styling/prettier.md) and [ESLint](docs/dev%20docs/typescript%20styling/eslint.md) guidelines to ensure consistent formatting and styling.

#### Step 6: Push to Your Fork

```bash
git push origin your-feature-name
```

#### Step 7: Create a Pull Request

* Go to your fork on GitHub.
* You’ll see a "Compare & pull request" button. Click it.
* Provide a clear description of what you’ve changed and why.
* Submit the pull request to the `development` branch of the original repository.

> ✅ **Note**: Make sure your code passes all CI checks and has been tested locally before opening a PR.

#### Step 8: Collaborate

* A team member will review your PR and may request changes.
* Once approved, your changes will be merged!
