import { copyFile, mkdir, readFile, writeFile } from 'node:fs/promises';

const main = async () => {
  await mkdir('dist/cjs/dict', { recursive: true });
  await mkdir('dist/esm/dict', { recursive: true });

  await writeFile(
    'dist/cjs/package.json',
    `${JSON.stringify({ type: 'commonjs' }, null, 2)}\n`,
  );
  await writeFile(
    'dist/esm/package.json',
    `${JSON.stringify({ type: 'module' }, null, 2)}\n`,
  );

  await copyFile(
    'src/dict/disposable_email_blocklist.json',
    'dist/cjs/dict/disposable_email_blocklist.json',
  );

  const jsonContent = await readFile(
    'src/dict/disposable_email_blocklist.json',
    { encoding: 'utf-8' },
  );
  await writeFile(
    'dist/esm/dict/disposable_email_blocklist.js',
    `export default ${jsonContent.trimEnd()};\n`,
  );

  const esmIndex = await readFile('dist/esm/index.js', { encoding: 'utf-8' });
  await writeFile(
    'dist/esm/index.js',
    esmIndex.replace(
      './dict/disposable_email_blocklist.json',
      './dict/disposable_email_blocklist.js',
    ),
  );
};

main().catch((error: unknown) => {
  console.error(error);
  process.exitCode = 1;
});
