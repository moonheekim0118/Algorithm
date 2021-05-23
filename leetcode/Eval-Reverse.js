/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const stack = [];
  const operators = {
    "/": (num1, num2) => {
      const res = num2 / num1;
      return Math.ceil(res) === -0 ? 0 : Math.floor(res);
    },
    "*": (num1, num2) => num1 * num2,
    "+": (num1, num2) => num2 + num1,
    "-": (num1, num2) => num2 - num1,
  };

  tokens.forEach((value) => {
    if (!isNaN(+value)) {
      stack.push(+value);
    } else {
      const num1 = stack.pop();
      const num2 = stack.pop();
      const result = operators[value](num1, num2);
      stack.push(result);
    }
  });
  return stack[0];
};

console.log(evalRPN(["4", "13", "5", "/", "+"]));

// node Eval-Reverse
