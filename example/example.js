var disposableEmailDomains = require('disposable-email-domains-js');

var filename = 'example.js';

console.log(filename, disposableEmailDomains.disposableEmailBlocklist());

console.log(
  filename,
  'it return false ->',
  disposableEmailDomains.isDisposableEmailDomain('example.com'),
);
console.log(
  filename,
  'it return true ->',
  disposableEmailDomains.isDisposableEmailDomain('mailinator.com'),
);

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
