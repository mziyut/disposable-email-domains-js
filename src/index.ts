export const disposableEmailBlocklist = async (): Promise<string[]> => {
  return await require('./dict/disposable_email_blocklist.json');
};

export const isDisposableEmail = async (email: string): Promise<boolean> => {
  const blocklist = await disposableEmailBlocklist();
  const domain = email.split('@').reverse()[0];

  return blocklist.includes(domain);
};
