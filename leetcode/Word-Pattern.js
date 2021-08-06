/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  const cache = new Map();
  const patrCache = new Set();
  const str = s.split(" ");
  const patternArr = pattern.split("");
  if (str.length !== patternArr.length) return false;
  for (let i = 0; i < str.length; i++) {
    const picked = str[i];
    const ptr = cache.get(picked);

    const currentPattern = patternArr[i];

    if (ptr && ptr !== currentPattern) {
      return false;
    }
    if (patrCache.has(currentPattern) && !ptr) return false;
    cache.set(picked, currentPattern);
    patrCache.add(currentPattern);
  }
  return true;
};
