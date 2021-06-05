/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function (s, k) {
  const map = new Map();
  map.clear();
  for (item of s) {
    if (map.has(item)) {
      map.set(item, map.get(item) + 1);
    } else {
      map.set(item, 1);
    }
  }
  for ([item, val] of map) {
    if (val < k) {
      let ar = s.split(item);
      let res = 0;
      for (word of ar) {
        res = Math.max(res, longestSubstring(word, k));
      }
      return res;
    }
  }
  return s.length;
};
