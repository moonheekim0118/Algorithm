/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function (n) {
  const set = new Set();

  for (let i = 1; i <= 9; i++) {
    helper(n, i);
  }

  function helper(n, prefix) {
    if (prefix > n) return;
    set.add(prefix);
    for (let i = 0; i <= 9; i++) {
      let temp = `${prefix}${i}`;
      if (+temp > n) return;
      helper(n, temp);
    }
  }
  return [...set];
};
