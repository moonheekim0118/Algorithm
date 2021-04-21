/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) return false;
  const num = x.toString();
  let start = 0;
  let end = num.length - 1;
  while (start <= end) {
    if (num[start] === num[end]) {
      start++;
      end--;
    } else {
      return false;
    }
  }
  return true;
};

isPalindrome();
