import fs from 'fs';
import { pipeline } from 'node:stream/promises';
import path from 'path';
import zlib from 'zlib';

const decompress = async () => {
  const cwd = import.meta.dirname;
  const zipPath = path.join(cwd, 'files', 'archive.gz');
  const outputPath = path.join(cwd, 'files', 'fileToCompress.txt');

  await pipeline(
    fs.createReadStream(zipPath),
    zlib.createGunzip(),
    fs.createWriteStream(outputPath),
  );

  console.log(
    `Successfully decompressed '${path.relative(cwd, zipPath)}'`,
    'to',
    `'${path.relative(cwd, outputPath)}'`,
  );
};

await decompress();
