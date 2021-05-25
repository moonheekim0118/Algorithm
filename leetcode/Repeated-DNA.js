/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
  if (s.length <= 10) return [];
  const ans = [];
  let window = s.slice(0, 10);
  const hashMap = new Map();
  for (let i = 0; i + 9 < s.length; i++) {
    if (i > 0) {
      window = window.substring(1) + s[i + 9];
    }
    if (hashMap.has(window)) {
      hashMap.set(window, 2);
    } else {
      hashMap.set(window, 1);
    }
  }
  return [...hashMap.entries()].filter((v) => v[1] === 2).map((v) => v[0]);
};
