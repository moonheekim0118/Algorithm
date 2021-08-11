/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
  let rows = 0;
  let num = 1;
  while (n - num >= 0) {
    rows++;
    n -= num++;
  }
  return rows;
};
