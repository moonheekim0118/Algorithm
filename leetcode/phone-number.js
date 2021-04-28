/**
 * @param {string} digits
 * @return {string[]}
 */

var getComb = function (digits, n, tmp, ans, length) {
  if (n === length) {
    ans.push(tmp.join(""));
    return;
  }
  const letter = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };
  const picked = letter[digits[n]];
  for (let i = 0; i < picked.length; i++) {
    tmp.push(picked[i]);
    getComb(digits, n + 1, tmp, ans, length);
    tmp.pop();
  }
};

var letterCombinations = function (digits) {
  const length = digits.length;
  if (length === 0) return [];
  const ans = [];
  getComb(digits, 0, [], ans, length);
  return ans;
};

letterCombinations("23");
