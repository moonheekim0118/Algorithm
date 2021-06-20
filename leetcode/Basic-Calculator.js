/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  const stack = [];
  let number = "";
  let sign = null;
  const n = s.length;

  for (let i = 0; i < n; i++) {
    const curr = s[i];
    if (curr === " ") continue;
    if (isNaN(curr)) {
      if (number === "") {
        if (curr === "-" && sign === "-") {
          sign = "+";
        } else if (curr === "(") {
          let tmp = "";
          let j = i + 1;
          while (j < n && s[j] !== ")") {
            tmp += s[j++];
          }
          const result = calculate(tmp);
          if (sign === "+" || !sign) stack.push(result);
          else stack.push(-result);
          sign = null;
        }
      } else {
        let num = Number(number);
        if (sign === "+" || !sign) stack.push(num);
        else stack.push(-num);
        number = "";
        sign = curr;
      }
    }
    if (!isNaN(curr)) {
      number += curr;
    }
  }

  return stack.reduce((curr, prev) => curr + prev, 0);
};
