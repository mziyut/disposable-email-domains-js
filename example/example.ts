import {
  disposableEmailBlocklist,
  isDisposableEmail,
} from 'disposable-email-domains-js';

const filename = 'example.ts';

(async () => {
  console.log(
    filename,
    'it return false ->',
    await isDisposableEmail('example@example.com'),
  );
  console.log(
    filename,
    'it return true ->',
    await isDisposableEmail('example@mailinator.com'),
  );
})();
