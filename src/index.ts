export const disposableEmailBlocklist = (): string[] => {
  return require('./dict/disposable_email_blocklist.json');
};

export const disposableEmailBlocklistSet = (): Set<string> => {
  const blocklist = disposableEmailBlocklist();
  return new Set(blocklist);
};

export const isDisposableEmailDomain = (domain: string): boolean => {
  const blocklist = disposableEmailBlocklistSet();

  const normalisedDomain = domain.trim().toLowerCase();

  return blocklist.has(normalisedDomain);
};

export const isDisposableEmail = (email: string): boolean => {
  const domain = email.split('@').reverse()[0];

  return isDisposableEmailDomain(domain);
};
