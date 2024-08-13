import {
  disposableEmailBlocklist,
  isDisposableEmail,
} from 'disposable-email-domains-js';

const filename = 'example.ts';

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
