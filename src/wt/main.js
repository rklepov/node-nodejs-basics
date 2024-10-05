import os from 'os';
import path from 'path';
import { Worker } from 'worker_threads';

const performCalculations = async () => {
  const nproc = os.cpus().length;
  const cwd = import.meta.dirname;

  const result = await Promise.all(
    [...Array(nproc).keys()].map((n) => {
      return new Promise((resolve) => {
        new Worker(path.join(cwd, 'worker.js'), {
          workerData: n + 10,
        })
          .on('message', (msg) => {
            resolve({ status: 'resolved', data: msg.result });
          })
          .on('error', () => {
            resolve({ status: 'error', data: null });
          });
      });
    }),
  );

  console.log(result);
};

await performCalculations();
