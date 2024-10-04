import fs from 'fs';
import os from 'os';
import path from 'path';

const read = async () => {
  const cwd = import.meta.dirname;
  const source = path.join(cwd, 'files', 'fileToRead.txt');

  const input = fs.createReadStream(source, { flags: 'r' });
  input
    .on('error', (e) => {
      throw new Error(`FS operation failed: ${e.message}`);
    })
    .on('close', () => {
      process.stdout.write(os.EOL);
    })
    .pipe(process.stdout);
};

await read();
