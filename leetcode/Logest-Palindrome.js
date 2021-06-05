/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  const set = new Set();
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (set.has(s[i])) {
      count += 2;
      set.delete(s[i]);
    } else {
      set.add(s[i]);
    }
  }
  return count + (set.size > 0 ? 1 : 0);
};
