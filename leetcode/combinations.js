/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const result = [];
  function getCombination(c, tmp, start) {
    if (c === n) {
      result.push([...tmp]);
      return;
    }
    for (let i = start; i <= n; i++) {
      tmp.push(i);
      getCombination(c + 1, tmp, i + 1);
      tmp.pop();
    }
  }

  getCombination(0, [], 1);
  return result;
};
