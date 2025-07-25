import { readFile, writeFile } from 'node:fs/promises';

const disposableEmailBlocklist = async (): Promise<string[]> => {
  const content = await readFile(
    'disposable-email-domains/disposable_email_blocklist.conf',
    { encoding: 'utf-8' },
  );

  return content.split('\n').filter((line) => line !== '');
};

const main = async () => {
  const blocklist = await disposableEmailBlocklist();

  await writeFile(
    'src/dict/disposable_email_blocklist.json',
    JSON.stringify(blocklist, null, 2),
  );
};

main();
