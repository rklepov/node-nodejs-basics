import fsp from 'fs/promises';
import path from 'path';

async function checkFileExists(path) {
  try {
    await fsp.access(path);
    return Promise.resolve(true);
  } catch {
    return Promise.resolve(false);
  }
}

const rename = async () => {
  const cwd = import.meta.dirname;
  const source = path.join(cwd, 'files', 'wrongFilename.txt');
  const target = path.join(cwd, 'files', 'properFilename.md');

  try {
    console.log(
      `${path.relative(cwd, source)} -> ${path.relative(cwd, target)}`,
    );

    if (!(await checkFileExists(source))) {
      throw new Error(
        `the source file doesn't exist: ${path.relative(cwd, source)}`,
      );
    }

    if (await checkFileExists(target)) {
      throw new Error(
        `the target file already exists: ${path.relative(cwd, target)}`,
      );
    }

    await fsp.rename(source, target);
  } catch (e) {
    throw new Error(`FS operation failed: ${e.message}`);
  }
};

await rename();
