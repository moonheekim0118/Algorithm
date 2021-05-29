/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let min = Number.MAX_VALUE;
  let max = 0;
  prices.forEach((v) => {
    min = Math.min(v, min);
    max = Math.max(max, v - min);
  });
  return max;
};
