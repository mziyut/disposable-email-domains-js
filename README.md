# disposable-email-domains-js

[![NPM](http://img.shields.io/npm/v/disposable-email-domains-js.svg?style=flat-square&label=npm)](https://www.npmjs.com/package/disposable-email-domains-js) [![test](https://github.com/mziyut/disposable-email-domains-js/actions/workflows/test.yml/badge.svg)](https://github.com/mziyut/disposable-email-domains-js/actions/workflows/test.yml) [![CodeQL](https://github.com/mziyut/disposable-email-domains-js/actions/workflows/github-code-scanning/codeql/badge.svg)](https://github.com/mziyut/disposable-email-domains-js/actions/workflows/github-code-scanning/codeql) [![codecov](https://codecov.io/github/mziyut/disposable-email-domains-js/graph/badge.svg?token=3OU2TSQQH6)](https://codecov.io/github/mziyut/disposable-email-domains-js)

This package determines whether an email domain is disposable.
The data used in this package is provided by [disposable-email-domains/disposable-email-domains: a list of disposable and temporary email address domains](https://github.com/disposable-email-domains/disposable-email-domains) and was created to be offered as an NPM package.

It is recommended to update the domains at [disposable-email-domains/disposable-email-domains: a list of disposable and temporary email address domains](https://github.com/disposable-email-domains/disposable-email-domains).

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

## Ref

- [disposable-email-domains/disposable-email-domains: a list of disposable and temporary email address domains](https://github.com/disposable-email-domains/disposable-email-domains)
