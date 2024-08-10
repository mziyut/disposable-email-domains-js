import { disposableEmailBlocklist, isDisposableEmail } from '../src/index';

describe('disposableEmailBlocklist', () => {
  test('should return an array of strings', async () => {
    const result = await disposableEmailBlocklist();

    expect(result).not.toEqual([]);
  });
});

describe('isDisposableEmail', () => {
  test('should return false for disposable email', async () => {
    const result = await isDisposableEmail('example@example.com');

    expect(result).toBe(false);
  });

  test('should return true for disposable email', async () => {
    const result = await isDisposableEmail('example@zzz.com');

    expect(result).toBe(true);
  });
});
