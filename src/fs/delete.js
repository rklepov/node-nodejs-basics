import fsp from 'fs/promises';
import path from 'path';

const remove = async () => {
  const cwd = import.meta.dirname;
  const filePath = path.join(cwd, 'files', 'fileToRemove.txt');

  try {
    console.log(`x ${path.relative(cwd, filePath)}`);
    await fsp.unlink(filePath);
  } catch (e) {
    throw new Error(`FS operation failed: ${e.message}`);
  }
};

await remove();
