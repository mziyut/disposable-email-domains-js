# disposable-email-domains-js

This package determines whether an email domain is disposable.
The data used in this package is provided by [disposable-email-domains/disposable-email-domains: a list of disposable and temporary email address domains](https://github.com/disposable-email-domains/disposable-email-domains) and was created to be offered as an NPM package.

It is recommended to update the domains at [disposable-email-domains/disposable-email-domains: a list of disposable and temporary email address domains](https://github.com/disposable-email-domains/disposable-email-domains).

## Usage

```js
var disposableEmailDomains = require('disposable-email-domains-js');

var filename = 'example.js';

(async () => {
  await disposableEmailDomains.isDisposableEmail('example@example.com'),
})();
```

```js
import { isDisposableEmail } from 'disposable-email-domains-js';

(async () => {
  await isDisposableEmail('example@example.com'),
})();
```

## Ref

- [disposable-email-domains/disposable-email-domains: a list of disposable and temporary email address domains](https://github.com/disposable-email-domains/disposable-email-domains)
