import { disposableEmailBlocklist, isDisposableEmail } from '../src/index';

describe('disposableEmailBlocklist', () => {
  test('should return an array of strings', () => {
    const result = disposableEmailBlocklist();

    expect(result).not.toEqual([]);
  });
});

describe('isDisposableEmailDomain', () => {
  test('should return false for disposable domain', () => {
    const result = isDisposableEmail('example.com');

    expect(result).toBe(false);
  });

  test('should return true for disposable domain', () => {
    const result = isDisposableEmail('mailinator.com');

    expect(result).toBe(true);
  });
});

describe('isDisposableEmail', () => {
  test('should return false for disposable email', () => {
    const result = isDisposableEmail('example@example.com');

    expect(result).toBe(false);
  });

  test('should return true for disposable email', () => {
    const result = isDisposableEmail('example@zzz.com');

    expect(result).toBe(true);
  });
});
