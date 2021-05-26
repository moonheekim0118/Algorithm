/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  let merged = "";
  let i = 0;
  while (i < s.length) {
    if (isNaN(Number(s[i]))) {
      // 일반 문자일경우
      merged += s[i];
    } else {
      // 숫자 나왔을 경우
      let repeatedNum = "";
      while (!isNaN(Number(s[i]))) repeatedNum += s[i++];
      repeatedNum = Number(repeatedNum);
      let j = i + 1;
      let left = 1;
      let right = 0;
      let substr = [];
      while (j < s.length) {
        if (s[j] === "[") left++;
        if (s[j] === "]") right++;
        if (left === right) break;
        substr.push(s[j++]);
      }
      merged += decodeString(substr.join("")).repeat(repeatedNum);
      i = j;
    }
    i++;
  }
  return merged;
};

console.log(decodeString("100[abc]"));

// node Decode-String
