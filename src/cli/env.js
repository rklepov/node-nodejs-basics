const parseEnv = () => {
  const env = process.env;
  Object.keys(env).forEach((key) => {
    if (key.match(/^RSS_./)) console.log(`${key}=${env[key]}`);
  });
};

parseEnv();
