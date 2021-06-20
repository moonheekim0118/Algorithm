/**
 * @param {string} expression
 * @return {number[]}
 */

const helpers = {
  "-": (n1, n2) => n1 - n2,
  "+": (n1, n2) => n1 + n2,
  "*": (n1, n2) => n1 * n2,
};

var diffWaysToCompute = function (expression) {
  expression = expression.split(/(?=[-*+])|(?<=[-*+])/g);
  const n = expression.length;

  if (expression.length === 1) return [Number(expression[0])];
  else if (expression.length === 3) {
    const num1 = Number(expression[0]);
    const num2 = Number(expression[2]);
    const res = helpers[expression[1]](num1, num2);
    return [res];
  }

  const result = [];
  for (let i = 0; i < n - 1; i += 2) {
    const part1 = expression.slice(0, i + 1);
    const part2 = expression.slice(i + 1, n);

    let operator = "+";
    if (part2.length % 2 === 0) {
      operator = part2[0];
      part2.shift();
    }
    const res1 = diffWaysToCompute(part1.join(""));
    const res2 = diffWaysToCompute(part2.join(""));
    for (let j = 0; j < res1.length; j++) {
      const pick = res1[j];
      for (let k = 0; k < res2.length; k++) {
        result.push(helpers[operator](pick, res2[k]));
      }
    }
  }

  return result;
};
