import crypto from 'crypto';
import fs from 'fs';
import os from 'os';
import path from 'path';

const calculateHash = async () => {
  const cwd = import.meta.dirname;
  const hash = crypto.createHash('sha256');
  const input = fs.createReadStream(
    path.join(cwd, 'files', 'fileToCalculateHashFor.txt'),
  );

  input
    .on('close', () => {
      process.stdout.write(os.EOL);
    })
    .pipe(hash)
    .setEncoding('hex')
    .pipe(process.stdout);
};

await calculateHash();
