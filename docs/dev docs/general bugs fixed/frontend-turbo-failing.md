# An unexpected Turbopack error occurred.

If you have this

```shell
FATAL: An unexpected Turbopack error occurred. Please report the content of /tmp/next-panic-b62484b441438e07928c2878aca486f9.log, along with a description of what you were doing when the error occurred, to https://github.com/vercel/next.js/issues/new?template=1.bug_report.yml
[Error [TurbopackInternalError]: Next.js package not found
```

Try removing the `node_modules` folder and the `package-lock.json` file, then reinstalling the dependencies:

```shell
rm -rf node_modules package-lock.json
pnpm install
```

And delete the `.next` folder:

```shell
rm -rf .next
```

Then run the development server again:

```shell
pnpm dev
```

If you want to start the server in production mode, you can run:

```shell
pnpm build
pnpm start
```
