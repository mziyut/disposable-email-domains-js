var disposableEmailDomains = require('disposable-email-domains-js');

var filename = 'example.js';

(async () => {
  console.log(
    filename,
    'it return false ->',
    await disposableEmailDomains.isDisposableEmail('example@example.com'),
  );
  console.log(
    filename,
    'it return true ->',
    await disposableEmailDomains.isDisposableEmail('example@mailinator.com'),
  );
})();
