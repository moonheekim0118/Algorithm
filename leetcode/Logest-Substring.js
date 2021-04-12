/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let max = 0;
  let prev = "";
  for (let i = 0, len = s.length; i < len; i++) {
    const word = s[i];
    if (prev.includes(word)) {
      let prevLength = prev.length;
      if (max < prevLength) {
        max = prevLength;
      }
      while (prev.includes(word) && prev.length > 0) {
        prev = prev.substring(1);
      }
      prev += word;
    } else {
      prev += word;
    }
  }
  return Math.max(max, prev.length);
};

console.log(lengthOfLongestSubstring("dvdf"));
