import fs from 'fs';
import { pipeline } from 'node:stream/promises';
import path from 'path';
import zlib from 'zlib';

const compress = async () => {
  const cwd = import.meta.dirname;
  const inputPath = path.join(cwd, 'files', 'fileToCompress.txt');
  const zipPath = path.join(cwd, 'files', 'archive.gz');

  await pipeline(
    fs.createReadStream(inputPath),
    zlib.createGzip(),
    fs.createWriteStream(zipPath),
  );

  console.log(
    `Successfully compressed '${path.relative(cwd, inputPath)}'`,
    'to',
    `'${path.relative(cwd, zipPath)}'`,
  );
};

await compress();
