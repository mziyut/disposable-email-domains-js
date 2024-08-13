var disposableEmailDomains = require('disposable-email-domains-js');

var filename = 'example.js';

console.log(
  filename,
  'it return false ->',
  disposableEmailDomains.isDisposableEmail('example@example.com'),
);
console.log(
  filename,
  'it return true ->',
  disposableEmailDomains.isDisposableEmail('example@mailinator.com'),
);
