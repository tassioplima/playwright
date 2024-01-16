# 🎭 Playwright

[![CI](https://github.com/tassioplima/playwright/actions/workflows/playwright.yml/badge.svg)](https://github.com/tassioplima/playwright/actions)
[![Report](https://img.shields.io/badge/Playwright-deployed-yellowgreen)](https://tassioplima.github.io/playwright/)

This repo is used to run various testing scenarios with [Playwright](https://playwright.dev/) 🎭 with Node.js.

### Install dependencies

Start creating a node project:

```bash
npm init -y
```

And install the playwright and dependencies:

```bash
npm init playwright@latest
```

Use the [VS Code Extension](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright) to run the tests in the tests folder from VS Code or run the following command in the terminal:

```bash
npx playwright test --ui
```

Use the command bellow to run playwright tests

```bash
npx playwright test
```

To open last HTML report run:

```bash
npx playwright show-report
```