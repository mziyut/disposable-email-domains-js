/**
 * Returns the list of disposable email domains as an array.
 *
 * @returns An array of disposable email domain strings
 */
export const disposableEmailBlocklist = (): string[] => {
  return require('./dict/disposable_email_blocklist.json');
};

/**
 * Returns the list of disposable email domains as a Set for efficient lookups.
 *
 * This function provides O(1) lookup performance compared to the array version.
 * Useful when you need to perform multiple domain checks.
 *
 * @returns A Set of disposable email domain strings
 */
export const disposableEmailBlocklistSet = (): Set<string> => {
  const blocklist = disposableEmailBlocklist();
  return new Set(blocklist);
};

/**
 * Checks if a given domain is a disposable email domain.
 *
 * The check is case-insensitive, trims whitespace, and also matches
 * subdomains of blocklisted domains (excluding TLD-only segments).
 *
 * @param domain - The domain to check (e.g., "example.com")
 * @returns `true` if the domain is disposable, `false` otherwise
 */
export const isDisposableEmailDomain = (domain: string): boolean => {
  const blocklist = disposableEmailBlocklistSet();

  const normalisedDomain = domain.trim().toLowerCase();
  const parts = normalisedDomain.split('.');

  // Check the domain and each parent domain, excluding the TLD (last segment)
  for (let i = 0; i < parts.length - 1; i++) {
    if (blocklist.has(parts.slice(i).join('.'))) {
      return true;
    }
  }

  return false;
};

/**
 * Checks if a given email address uses a disposable email domain.
 *
 * The check is case-insensitive, trims whitespace from the domain part,
 * and also matches subdomains of blocklisted domains.
 *
 * @param email - The email address to check (e.g., "user@example.com")
 * @returns `true` if the email uses a disposable domain, `false` otherwise
 */
export const isDisposableEmail = (email: string): boolean => {
  const domain = email.split('@').reverse()[0];

  return isDisposableEmailDomain(domain);
};
