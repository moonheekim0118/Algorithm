/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  const stack = [];
  let result = 0;
  let number = "";
  let sign = 1;
  let n = s.length;
  for (let i = 0; i < n; i++) {
    const curr = s[i];
    if (curr === " ") continue;
    else if (!isNaN(curr)) number += s[i];
    else if (isNaN(curr)) {
      if (curr === "+" || curr === "-") {
        result += Number(number) * sign;
        number = "";
        sign = curr === "-" ? -1 : 1;
      } else if (curr === "(") {
        stack.push(result);
        stack.push(sign);
        sign = 1;
        result = 0;
      } else if (curr === ")") {
        result += Number(number) * sign;
        number = "";
        result *= stack.pop();
        result += stack.pop();
      }
    }
  }
  if (number !== "") result += sign * Number(number);
  return result;
};
