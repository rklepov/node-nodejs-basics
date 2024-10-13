import fsp from 'fs/promises';
import path from 'path';

const list = async () => {
  const cwd = import.meta.dirname;
  const dirPath = path.join(cwd, 'files');

  try {
    const dir = await fsp.opendir(dirPath);

    for await (const dirent of dir) {
      if (dirent.isFile()) {
        console.log(dirent.name);
      }
    }
  } catch (e) {
    throw new Error(`FS operation failed: ${e.message}`);
  }
};

await list();
