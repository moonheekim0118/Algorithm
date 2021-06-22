/**
 * @param {string} s
 * @return {string}
 */

var removeDuplicateLetters = function (s) {
  const n = s.length;
  const count = new Map();
  const used = new Set();
  const stack = [];

  "abcdefghijklmnopqrstuvwxyz".split("").forEach((v) => {
    count.set(v, 0);
  });

  for (let i = 0; i < n; i++) {
    count.set(s[i], count.get(s[i]) + 1);
  }

  for (let i = 0; i < n; i++) {
    const letter = s[i];
    count.set(letter, count.get(letter) - 1);

    if (!used.has(letter)) {
      while (
        stack.length > 0 &&
        stack[stack.length - 1].localeCompare(letter) === 1 &&
        count.get(stack[stack.length - 1]) > 0
      ) {
        used.delete(stack[stack.length - 1]);
        stack.pop();
      }
      stack.push(s[i]);
    }
    used.add(letter);
  }
  return stack.join("");
};
