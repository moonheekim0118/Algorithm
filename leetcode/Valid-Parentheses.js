// node Valid-Parentheses

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];
  const pair = { "(": ")", "{": "}", "[": "]" };
  s = s.split("");
  for (let p of s) {
    const pop = stack.pop();
    if (pair[pop] !== p) {
      if (pop) {
        stack.push(pop);
      }
      stack.push(p);
    }
  }
  return stack.length === 0;
};

console.log(isValid("{[]}"));
