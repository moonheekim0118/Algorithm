/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  if (nums.length === 0) return 0;
  let max = 0;
  let cnt = 1;
  nums = [...new Set(nums.sort((a, b) => a - b))];
  console.log(nums);
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] + 1 === nums[i]) {
      cnt++;
    } else {
      max = Math.max(cnt, max);
      cnt = 1;
    }
  }
  return Math.max(max, cnt);
};
