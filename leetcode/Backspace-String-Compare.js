/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  const sResult = [];
  const tResult = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "#") {
      sResult.pop();
    } else {
      sResult.push(s[i]);
    }
  }

  for (let i = 0; i < t.length; i++) {
    if (t[i] === "#") {
      tResult.pop();
    } else {
      tResult.push(t[i]);
    }
  }

  return sResult.join("") === tResult.join("");
};
