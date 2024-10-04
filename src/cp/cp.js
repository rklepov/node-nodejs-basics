import * as cp from 'child_process';
import * as path from 'path';

const spawnChildProcess = async (args) => {
  const cwd = import.meta.dirname;
  const child = cp.fork(path.join(cwd, 'files', 'script.js'), args, {
    stdio: 'inherit',
  });

  child.on('exit', (code) => {
    console.log(`child process exited with code ${code}`);
    console.log('BYE!');
    process.exit(code);
  });
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['--arg1', 'value1', 'positional_arg1', 'positional_arg2']);
