# Copilot Instructions for disposable-email-domains-js

## Project Overview

This project provides a JavaScript/TypeScript library to determine if an email address or domain is disposable (temporary). The core data is sourced from [disposable-email-domains/disposable-email-domains](https://github.com/disposable-email-domains/disposable-email-domains) and distributed as a JSON blocklist for programmatic use.

## Directory Structure and Notable Files

- `src/` — Main TypeScript source code.
- `example/` — Example usage in both JavaScript and TypeScript. Used for integration testing and as a reference for library consumers. Run tests here with `npm run test:example`.
- `disposable-email-domains/` — Contains the original blocklist and scripts for maintaining/updating the domain list.
- `test/` — Unit tests for the main library.

## Data Update & Release Flow

- To update the blocklist, run `npm run generate:disposable_email_blocklist_json`.
- After updating, push a new version tag (`v*.*.*`) to trigger npm publish via GitHub Actions.
- The blocklist is generated from the upstream repo. To add/remove domains, contribute to [disposable-email-domains/disposable-email-domains] first.

## Code Style & Tooling

- Use TypeScript and Prettier for all code. Run `npm run lint` to check, `npm run lint:fix` to auto-fix.
- All code and examples should pass `npm run build` and `npm run test`.
- Example code in `example/` must remain in sync with the main API and pass its own tests.

## CI/CD

- GitHub Actions run tests, lint, and build on all PRs and pushes.
- Domain list and package publishing are automated via workflows.

## Contribution Guidelines

- PRs and issues are welcome. For blocklist changes, contribute upstream first.
- Keep code, tests, and examples consistent and up-to-date.
- All code is released under CC0 1.0 Universal (public domain dedication).

## License

- This project and its data are licensed under CC0 1.0 Universal.

---

For any questions, open an issue or see the README for more details.
