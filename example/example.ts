import {
  disposableEmailBlocklist,
  isDisposableEmail,
  isDisposableEmailDomain,
} from 'disposable-email-domains-js';

const filename = 'example.ts';

console.log(filename, disposableEmailBlocklist());

console.log(
  filename,
  'it return false ->',
  isDisposableEmailDomain('example.com'),
);
console.log(
  filename,
  'it return true ->',
  isDisposableEmailDomain('mailinator.com'),
);

console.log(
  filename,
  'it return false ->',
  isDisposableEmail('example@example.com'),
);
console.log(
  filename,
  'it return true ->',
  isDisposableEmail('example@mailinator.com'),
);
