import fsp from 'fs/promises';
import path from 'path';

const copy = async () => {
  const cwd = import.meta.dirname;
  const inputPath = path.join(cwd, 'files');
  const outputPath = path.join(cwd, 'files_copy');

  try {
    const inputDir = await fsp.opendir(inputPath);
    await fsp.mkdir(outputPath);

    for await (const dirent of inputDir) {
      if (dirent.isFile()) {
        console.log(
          `${path.relative(cwd, path.join(inputPath, dirent.name))}`,
          '->',
          `${path.relative(cwd, path.join(outputPath, dirent.name))}`,
        );
        await fsp.copyFile(
          path.join(inputPath, dirent.name),
          path.join(outputPath, dirent.name),
        );
      }
    }
  } catch (e) {
    throw new Error(`FS operation failed: ${e.message}`);
  }
};

await copy();
