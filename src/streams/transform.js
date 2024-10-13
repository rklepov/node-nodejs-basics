import os from 'os';
import stream from 'stream';

const transform = async () => {
  process.stdin
    .pipe(
      new stream.Transform({
        decodeStrings: true,

        transform(chunk, encoding, callback) {
          callback(
            null,
            `${chunk.toString().trim().split('').reverse().join('')}${os.EOL}`,
          );
        },
      }),
    )
    .pipe(process.stdout);
};

await transform();
