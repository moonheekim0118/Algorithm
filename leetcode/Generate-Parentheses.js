/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const answers = [];

  function backtrack(str, open, close, max) {
    if (str.length === max * 2) {
      return answers.push(str);
    }
    if (open < max) {
      backtrack(str + "(", open + 1, close, max);
    }
    if (close < open) {
      backtrack(str + ")", open, close + 1, max);
    }
  }
  backtrack("", 0, 0, n);
  return answers;
};

console.log(generateParenthesis(3));

// node Generate-Parentheses
