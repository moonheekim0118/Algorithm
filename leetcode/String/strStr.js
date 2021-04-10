/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  const hayLength = haystack.length;
  const needleLength = needle.length;
  if (hayLength === needleLength) {
    // 길이가 같을 때
    if (haystack === needle) return 0;
    // 아예 같을 때
    else return -1; // 다르면
  }
  let subStack = haystack.slice(0, needleLength);
  if (subStack === needle) return 0;
  for (let i = needleLength; i < hayLength; i++) {
    subStack = subStack.substring(1);
    subStack += haystack[i];
    if (subStack === needle) return i - needleLength;
  }
  return -1;
};

console.log(strStr("", ""));
