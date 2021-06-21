/**
 * @param {string} s
 * @return {number}
 */
var countHomogenous = function (s) {
  const mode = 10 ** 9 + 7;
  const hash = new Map();
  let window = s[0];
  const n = s.length;
  for (let i = 1; i <= n; i++) {
    if (s[i] === s[i - 1]) {
      window += s[i];
    } else {
      let picked = window[0];
      let j = 1;
      const size = window.length;
      while (j <= size) {
        const times = size - j + 1;
        const tmp = picked.repeat(j);
        hash.set(tmp, hash.has(tmp) ? hash.get(tmp) + times : times);
        j++;
      }
      window = s[i];
    }
  }
  return [...hash.values()].reduce((prev, curr) => prev + curr, 0) % mode;
};
