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
import { isDisposableEmail } from 'disposable-email-domains-js';

isDisposableEmailDomain('example.com'); // return false
isDisposableEmail('example@example.com'); // return false

isDisposableEmailDomain('mailinator.com'); // return true
isDisposableEmail('example@mailinator.com'); // return true
```

## Updating the Domain List

This repository generates `disposable_email_blocklist.json` from `disposable_email_blocklist.conf` of [disposable-email-domains/disposable-email-domains]. You can update the JSON file with the following command.

```sh
npm run generate:disposable_email_blocklist_json
```

After updating the JSON file, please publish the NPM package. To publish, you can push the tag `v*.*.*` to release the NPM package.

If you want to update the domain list, please make a pull request to [disposable-email-domains/disposable-email-domains]. When it is reflected in [disposable-email-domains/disposable-email-domains], it will also be reflected in this package.

## Ref

- [disposable-email-domains/disposable-email-domains: a list of disposable and temporary email address domains](https://github.com/disposable-email-domains/disposable-email-domains)

[disposable-email-domains/disposable-email-domains]: https://github.com/disposable-email-domains/disposable-email-domains
