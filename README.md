# disposable-email-domains-js

[![NPM](http://img.shields.io/npm/v/disposable-email-domains-js.svg?style=flat-square&label=npm)](https://www.npmjs.com/package/disposable-email-domains-js) [![test](https://github.com/mziyut/disposable-email-domains-js/actions/workflows/test.yml/badge.svg)](https://github.com/mziyut/disposable-email-domains-js/actions/workflows/test.yml) [![CodeQL](https://github.com/mziyut/disposable-email-domains-js/actions/workflows/github-code-scanning/codeql/badge.svg)](https://github.com/mziyut/disposable-email-domains-js/actions/workflows/github-code-scanning/codeql) [![codecov](https://codecov.io/github/mziyut/disposable-email-domains-js/graph/badge.svg?token=3OU2TSQQH6)](https://codecov.io/github/mziyut/disposable-email-domains-js)

This package determines whether an email domain is disposable.
The data used in this package is provided by [disposable-email-domains/disposable-email-domains] and was created to be offered as an NPM package.

## Usage

```js
var disposableEmailDomains = require('disposable-email-domains-js');

disposableEmailDomains.isDisposableEmailDomain('example.com'); // return false
disposableEmailDomains.isDisposableEmail('example@example.com'); // return false

disposableEmailDomains.isDisposableEmailDomain('mailinator.com'); // return true
disposableEmailDomains.isDisposableEmail('example@mailinator.com'); // return true
```

```js
import {
  isDisposableEmail,
  isDisposableEmailDomain,
} from 'disposable-email-domains-js';

isDisposableEmailDomain('example.com'); // return false
isDisposableEmail('example@example.com'); // return false

isDisposableEmailDomain('mailinator.com'); // return true
isDisposableEmail('example@mailinator.com'); // return true
```

## Development & Contribution

- Use TypeScript and Prettier for all code. Run `npm run lint` to check, `npm run lint:fix` to auto-fix.
- All code and examples should pass `npm run build` and `npm run test`.
- PRs and issues are welcome. For blocklist changes, contribute upstream first ([disposable-email-domains/disposable-email-domains](https://github.com/disposable-email-domains/disposable-email-domains))。

## CI/CD

GitHub Actions automatically run tests, lint, and build on all PRs and pushes. Domain list updates and package publishing are also automated.

This repository generates `disposable_email_blocklist.json` from `disposable_email_blocklist.conf` of [disposable-email-domains/disposable-email-domains]. You can update the JSON file with the following command.

```sh
npm run generate:disposable_email_blocklist_json
```

After updating the JSON file, please publish the NPM package. To publish, you can push the tag `v*.*.*` to release the NPM package.

If you want to update the domain list, please make a pull request to [disposable-email-domains/disposable-email-domains]. When it is reflected in [disposable-email-domains/disposable-email-domains], it will also be reflected in this package.

## Example Directory

The `example/` directory contains sample code in both JavaScript and TypeScript. It serves as:

- A reference for library consumers (see API usage examples)
- Integration testing (run with `npm run test:example`)
- A check to ensure the example code stays in sync with the main API

## License

This project and its data are licensed under CC0 1.0 Universal (public domain dedication).

## Ref

- [disposable-email-domains/disposable-email-domains: a list of disposable and temporary email address domains](https://github.com/disposable-email-domains/disposable-email-domains)

[disposable-email-domains/disposable-email-domains]: https://github.com/disposable-email-domains/disposable-email-domains
