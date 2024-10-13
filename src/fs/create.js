import fs from 'fs';
import os from 'os';
import path from 'path';

const create = async () => {
  const cwd = import.meta.dirname;
  const target = path.join(cwd, 'files', 'fresh.txt');

  const output = fs.createWriteStream(target, { flags: 'wx' });
  output
    .on('error', (e) => {
      throw new Error(`FS operation failed: ${e.message}`);
    })
    .end(`I am fresh and young${os.EOL}`);
};

await create();
