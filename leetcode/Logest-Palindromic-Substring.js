/**
 * @param {string} s
 * @return {string}
 */

var isPalindrome = function (s) {
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    if (s[left] !== s[right]) return false;
    left++;
    right--;
  }
  return true;
};

var longestPalindrome = function (s) {
  let prev = s[0];
  let max = 1;
  let pal = prev;

  for (let i = 1, len = s.length; i < len; i++) {
    let word = s[i];
    let temp = prev;
    let merged = temp + word;
    while (!isPalindrome(merged) && temp.length > 0) {
      temp = temp.substring(1);
      merged = temp + word;
    }
    prev += word;
    let mergedLength = merged.length;
    if (mergedLength > max) {
      max = mergedLength;
      pal = merged;
    }
  }
  return pal;
};

var expandAroundCenter = function (s, left, right) {
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left--;
    right++;
  }
  return right - left - 1;
};

var longestPalindrome = function (s) {
  let start = 0;
  let end = 0;
  for (let i = 0; i < s.length; i++) {
    const len1 = expandAroundCenter(s, i, i);
    const len2 = expandAroundCenter(s, i, i + 1);
    console.log(len1, len2);
    const len = Math.max(len1, len2);
    if (len > end - start) {
      start = i - Math.floor((len - 1) / 2);
      end = i + Math.floor(len / 2);
    }
  }
  return s.substring(start, end + 1);
};

console.log(longestPalindrome("cbbd"));
