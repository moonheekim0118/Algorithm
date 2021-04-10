/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return "";
  strs.sort((a, b) => a.length - b.length);
  let max = strs[0].length;
  let len = strs.length;
  for (let i = max; i > 0; i--) {
    // 0 부터 i 까지
    let flag = true;
    let prefix = strs[0].slice(0, i);
    for (let j = 1; j < len; j++) {
      if (strs[j].slice(0, i) !== prefix) {
        flag = false;
        break;
      }
    }
    if (flag) return prefix;
  }
  return "";
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
