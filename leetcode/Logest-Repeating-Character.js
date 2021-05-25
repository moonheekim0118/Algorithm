/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

// 넘어렵다..다시풀어라
var characterReplacement = function (s, k) {
  const length = s.length;
  let cnt = new Array(26).fill(0);
  let start = 0,
    maxCnt = 0,
    maxLength = 0;
  for (let end = 0; end < length; end++) {
    maxCnt = Math.max(maxCnt, ++cnt[s[end].charCodeAt(0)]);
    while (end - start + 1 - maxCnt > k) {
      cnt[s[start].charCodeAt(0)]--;
      start++;
    }
    maxLength = Math.max(maxLength, end - start + 1);
  }
  return maxLength;
};
