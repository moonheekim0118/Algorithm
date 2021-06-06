/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let left = 0;
  let right = t.length - 1;

  while (left < right && s.length > 0) {
    if (t[left] === s[0]) {
      s = s.substring(1);
    }

    if (t[right] === s[s.length - 1]) {
      s = s.substring(0, s.length - 1);
    }

    left++;
    right++;
  }

  return s.length === 0;
};
