/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var numMatchingSubseq = function (s, words) {
  let count = 0;
  for (let word of words) {
    let i = 0;
    let j = 0;
    while (j < word.length && i < s.length) {
      if (word[j] === s[i]) {
        j++;
        i++;
      } else {
        i++;
      }
    }
    if (j === word.length) count++;
  }
  return count;
};
