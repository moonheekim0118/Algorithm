/**
 * @param {string} s
 * @return {number}
 */
// 이거 프로그래머스에 비슷한거 있었던듯?
var romanToInt = function (s) {
  const table = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;
  const n = s.length;
  for (let i = 0; i < n; i++) {
    if (i < n - 1) {
      const j = i + 1;
      if (s[i] === "I") {
        if (s[j] === "V") {
          result += 4;
          i++;
          continue;
        } else if (s[j] === "X") {
          result += 9;
          i++;
          continue;
        }
      } else if (s[i] === "X") {
        if (s[j] === "L") {
          result += 40;
          i++;
          continue;
        } else if (s[j] === "C") {
          result += 90;
          i++;
          continue;
        }
      } else if (s[i] === "C") {
        if (s[j] === "D") {
          result += 400;
          i++;
          continue;
        } else if (s[j] === "M") {
          result += 900;
          i++;
          continue;
        }
      }
    }
    result += table[s[i]];
  }

  return result;
};
