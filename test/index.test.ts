import {
  disposableEmailBlocklist,
  disposableEmailBlocklistSet,
  isDisposableEmail,
  isDisposableEmailDomain,
} from '../src/index';

describe('disposableEmailBlocklist', () => {
  test('should return an array of strings', () => {
    const result = disposableEmailBlocklist();

    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBeGreaterThan(0);
    expect(result.every((value) => typeof value === 'string')).toBe(true);
  });
});

describe('disposableEmailBlocklistSet', () => {
  test('should return a Set of strings', () => {
    const result = disposableEmailBlocklistSet();

    expect(result instanceof Set).toBe(true);
    expect(result.size).toBeGreaterThan(0);
    expect(Array.from(result).every((value) => typeof value === 'string')).toBe(
      true,
    );
  });

  test('should contain the same domains as disposableEmailBlocklist', () => {
    const arrayResult = disposableEmailBlocklist();
    const setResult = disposableEmailBlocklistSet();

    expect(setResult.size).toBe(arrayResult.length);
    expect(arrayResult.every((domain) => setResult.has(domain))).toBe(true);
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

  test('should return true for root disposable domain', () => {
    expect(isDisposableEmailDomain('mailinator.com')).toBe(true);
  });

  test('should return true for single-level subdomain of disposable domain', () => {
    expect(isDisposableEmailDomain('sub.mailinator.com')).toBe(true);
  });

  test('should return true for multi-level subdomain of disposable domain', () => {
    expect(isDisposableEmailDomain('a.b.c.mailinator.com')).toBe(true);
  });

  test('should return true for subdomain with capitalisation and surrounding whitespace', () => {
    expect(isDisposableEmailDomain(' SUB.Mailinator.COM ')).toBe(true);
  });

  test('should return false for domain with partial suffix match', () => {
    expect(isDisposableEmailDomain('examplemailinator.com')).toBe(false);
  });

  test('should return false for legitimate domains and subdomains', () => {
    expect(isDisposableEmailDomain('gmail.com')).toBe(false);
    expect(isDisposableEmailDomain('mail.google.com')).toBe(false);
  });

  test('should return false for TLD-only or empty inputs', () => {
    expect(isDisposableEmailDomain('com')).toBe(false);
    expect(isDisposableEmailDomain('')).toBe(false);
    expect(isDisposableEmailDomain('   ')).toBe(false);
  });

  test('should handle leading or trailing dots safely', () => {
    expect(isDisposableEmailDomain('.mailinator.com')).toBe(true);
    expect(isDisposableEmailDomain('mailinator.com.')).toBe(false);
    expect(isDisposableEmailDomain('.com')).toBe(false);
    expect(isDisposableEmailDomain('com.')).toBe(false);
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

  test('should return true for email with subdomain of disposable domain', () => {
    expect(isDisposableEmail('user@sub.mailinator.com')).toBe(true);
    expect(isDisposableEmail('user@a.b.c.mailinator.com')).toBe(true);
  });

  test('should return false for email with non-disposable subdomain or partial match', () => {
    expect(isDisposableEmail('user@examplemailinator.com')).toBe(false);
    expect(isDisposableEmail('user@mail.google.com')).toBe(false);
  });
});
