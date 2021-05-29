/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
  nums.sort((a, b) => a - b);
  const result = [];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) result.push(nums[i]);
  }
  return result;
};
