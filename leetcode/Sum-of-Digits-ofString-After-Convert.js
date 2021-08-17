/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function (s, k) {
  let num = "";
  for (let i = 0; i < s.length; i++) {
    num = num + `${s[i].charCodeAt(0) - 96}`;
  }
  for (let i = 0; i < k; i++) {
    let temp = 0;
    for (let j = 0; j < num.length; j++) {
      temp += +num[j];
    }
    num = `${temp}`;
  }
  return +num;
};
