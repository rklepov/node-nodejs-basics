import fs from 'fs';
import path from 'path';

const write = async () => {
  process.stdin.pipe(
    fs.createWriteStream(
      path.join(import.meta.dirname, 'files', 'fileToWrite.txt'),
      { flush: true, flags: 'a' },
    ),
  );
};

await write();
