/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function (s) {
  s = s.split("");
  const stack = [];
  let stars = 0;
  while (s.length > 0) {
    const curr = s.shift();
    if (curr === "*") {
      if (stack.length > 0 && stack[stack.length - 1] !== ")") {
        stack.pop();
      } else {
        stack.push();
        stars++;
      }
    } else if (curr === "(") {
      stack.push(curr);
    } else {
      if (stack.length === 0 || stack[stack.length - 1] === ")") {
        return false;
      }

      stack.pop();
    }
  }
  return stack.length <= stars;
};
