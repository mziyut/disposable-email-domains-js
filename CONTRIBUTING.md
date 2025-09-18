# Contributing to disposable-email-domains-js

Thank you for your interest in contributing! This document explains how to propose changes and what guidelines to follow.

## Project Overview

This project provides a TypeScript/JavaScript library to detect disposable (temporary) email addresses and domains. The blocklist is generated from [disposable-email-domains/disposable-email-domains](https://github.com/disposable-email-domains/disposable-email-domains).

## How to Contribute

### 1. Issues

- For bug reports or feature requests, please open an Issue.
- For blocklist changes (add/remove domains), contribute upstream first: [disposable-email-domains/disposable-email-domains](https://github.com/disposable-email-domains/disposable-email-domains).

### 2. Pull Requests (PR)

- Fork the repository and create a new branch for your fix or feature.
- Make your changes, keeping code and examples in sync.
- Run `npm run lint`, `npm run build`, and `npm run test` before submitting.
- If you update the blocklist, run `npm run generate:disposable_email_blocklist_json`.
- Ensure the `example/` directory code works and passes its own tests (`npm run test:example`).
- Open a PR with a clear title and description. Link related Issues if any.

### 3. Code Style & Development

- Use TypeScript and Prettier. Run `npm run lint:fix` to auto-format.
- Keep code, tests, and examples consistent and up-to-date.
- All code and documentation must pass CI checks (lint, build, test).

### 4. Domain List Updates

- Do not edit the blocklist JSON directly. Instead, update the upstream repo and regenerate the JSON with `npm run generate:disposable_email_blocklist_json`.
- After updating, push a new version tag (`v*.*.*`) to trigger npm publish via GitHub Actions.

### 5. License

- By contributing, you agree that your code and documentation will be released under the CC0 1.0 Universal license (public domain dedication).

---

For more details, see the README and `.github/copilot-instructions.md`. If you have questions, open an Issue.
