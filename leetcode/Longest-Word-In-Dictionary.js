/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {string}
 */
var findLongestWord = function (s, dictionary) {
  const size = s.length;
  const answers = [];
  function helper(word) {
    let i = 0;
    let j = 0;
    while (i < size && j < word.length) {
      if (s[i] !== word[j]) {
        i++;
      } else {
        i++;
        j++;
      }
    }
    return j === word.length;
  }
  dictionary.forEach((word) => {
    if (helper(word)) {
      answers.push(word);
    }
  });
  answers.sort((a, b) => {
    const length = b.length - a.length;
    if (length !== 0) return length;
    else {
      return a.localeCompare(b);
    }
  });
  return answers[0] ?? "";
};
