export const disposableEmailBlocklist = (): string[] => {
  return require('./dict/disposable_email_blocklist.json');
};

export const isDisposableEmail = (email: string): boolean => {
  const blocklist = disposableEmailBlocklist();
  const domain = email.split('@').reverse()[0];

  return blocklist.includes(domain);
};
