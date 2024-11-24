const argKey = (x) => x.toString() + ":" + typeof x;
const generateKey = (args) => args.map(argKey).join("|");

const memoize = (fn) => {
  const cache = new Map();
  return (...args) => {
    const key = generateKey(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const res = fn(...args);
    cache.set(key, res);
    return res;
  };
};
