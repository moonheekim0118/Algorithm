/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  const result = [];
  const n = s.length;
  function isPalindrome(str) {
    let left = 0;
    let right = str.length - 1;
    while (left < right) {
      if (str[left++] !== str[right--]) return false;
    }
    return true;
  }
  function combination(count, list, first) {
    if (count === 0) {
      result.push([...list]);
      return;
    }
    for (let i = first; i < n; i++) {
      let window = "";
      for (let j = i; j < n; j++) {
        window = window + s[j];
        if (isPalindrome(window)) {
          list.push(window);
          combination(count - window.length, list, j + 1);
          list.pop(window);
        }
      }
    }
  }

  combination(n, [], 0);
  return result;
};
