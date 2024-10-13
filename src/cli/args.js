const parseArgs = () => {
  for (let i = 3; i < process.argv.length; i += 2) {
    const [arg, val] = process.argv.slice(i - 1, i + 1);
    console.log(`${arg.replace(/^--?/, '')} is ${val}`);
  }
};

parseArgs();
