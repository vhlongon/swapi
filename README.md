# Swapi

![Coverage Badge](https://raw.githubusercontent.com/gist/vhlongon/b1f395b2532fc512e4b3ce4fa294e1b9/raw/badge.svg)

This is a simple [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

It fetches data from [Swapi](http://swapi.dev/api) and displays information about the Star Wars characters and movies.

The project uses:

- [Daizyui](https://daisyui.com/) for styling and components
- [React query](https://tanstack.com/query/latest/docs/react/overview) for fetching data
- [Zod](https://github.com/colinhacks/zod) for runtime type validation
- [Vitest](https://vitest.dev/) and [Testing library](https://testing-library.com/) for testing
- [MSW](https://mswjs.io/) for mocking the API calls in tests
- [Playwright](https://playwright.dev/) for e2e testing

Make sure you have [pnpm](https://pnpm.io/) installed. If you don't, you can install it with `npm i -g pnpm`.

## Getting Started

First, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Running tests

Run for the unit and integration tests:

```bash
pnpm test
```

or

```bash
pnpm test:ci
```

to get a coverage. See the result report under `coverage/`

Run for the e2e tests:

```bash
pnpm test:e2e
```

or run in ui mode

```bash
pnpm test:e2e:ui
```
