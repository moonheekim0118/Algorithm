/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  const dp = [];
  const size = nums.length;
  dp[0] = 1;
  for (let i = 1; i < size; i++) {
    let max = 0;
    for (let j = i - 1; j >= 0; j--) {
      if (nums[j] < nums[i]) {
        max = Math.max(max, dp[j]);
      }
    }
    dp[i] = max + 1;
  }
  return Math.max(...dp);
};
