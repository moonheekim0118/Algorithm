/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  const dp = [];
  dp[0] = 0;
  let offset = 1;
  for (let i = 1; i <= n; i++) {
    if (offset * 2 == i) {
      offset *= 2;
    }
    dp[i] = dp[i - offset] + 1;
  }
  return dp;
};
