import fs from 'fs';
import os from 'os';
import path from 'path';

const read = async () => {
  const cwd = import.meta.dirname;
  const input = fs.createReadStream(path.join(cwd, 'files', 'fileToRead.txt'));

  input
    .on('close', () => {
      process.stdout.write(os.EOL);
    })
    .pipe(process.stdout);
};

await read();
