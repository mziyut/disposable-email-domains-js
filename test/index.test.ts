import { disposableEmailBlocklist, isDisposableEmail } from '../src/index';

describe('disposableEmailBlocklist', () => {
  test('should return an array of strings', () => {
    const result = disposableEmailBlocklist();

    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBeGreaterThan(0);
    expect(result.every(value => typeof value === 'string')).toBe(true);
  });
});

describe('isDisposableEmailDomain', () => {
  test('should return false for non-disposable domain', () => {
    const result = isDisposableEmail('example.com');

    expect(result).toBe(false);
  });

  test('should return true for disposable domain', () => {
    const result = isDisposableEmail('mailinator.com');

    expect(result).toBe(true);
  });

  test('should return false for non-disposable domain with capitalisation', () => {
    const result = isDisposableEmail('example.com');

    expect(result).toBe(false);
  });

  test('should return true for disposable domain with capitalisation', () => {
    const result = isDisposableEmail('Mailinator.com');

    expect(result).toBe(true);
  });

  test('should return false for non-disposable domain with leading whitespace', () => {
    const result = isDisposableEmail(' example.com');

    expect(result).toBe(false);
  });

  test('should return true for disposable domain with leading whitespace', () => {
    const result = isDisposableEmail(' mailinator.com');

    expect(result).toBe(true);
  });

  test('should return false for non-disposable domain with trailing whitespace', () => {
    const result = isDisposableEmail('example.com ');

    expect(result).toBe(false);
  });

  test('should return true for disposable domain with trailing whitespace', () => {
    const result = isDisposableEmail('mailinator.com ');

    expect(result).toBe(true);
  });
});

describe('isDisposableEmail', () => {
  test('should return false for non-disposable email', () => {
    const result = isDisposableEmail('example@example.com');

    expect(result).toBe(false);
  });

  test('should return true for disposable email', () => {
    const result = isDisposableEmail('example@zzz.com');

    expect(result).toBe(true);
  });

  test('should return false for non-disposable email with capitalisation', () => {
    const result = isDisposableEmail('Example@Example.com');

    expect(result).toBe(false);
  });

  test('should return true for disposable email with capitalisation', () => {
    const result = isDisposableEmail('Example@zZZ.com');

    expect(result).toBe(true);
  });

  test('should return false for non-disposable email with leading whitespace', () => {
    const result = isDisposableEmail('example@ example.com');

    expect(result).toBe(false);
  });

  test('should return true for disposable email with leading whitespace', () => {
    const result = isDisposableEmail('example@ zzz.com');

    expect(result).toBe(true);
  });

  test('should return false for non-disposable email with trailing whitespace', () => {
    const result = isDisposableEmail('example@example.com ');

    expect(result).toBe(false);
  });

  test('should return true for disposable email with trailing whitespace', () => {
    const result = isDisposableEmail('example@zzz.com ');

    expect(result).toBe(true);
  });
});
