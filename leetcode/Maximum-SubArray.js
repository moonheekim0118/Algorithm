/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  const table = [nums[0]];
  const n = nums.length;
  for (let i = 1; i < n; i++) {
    const prev = table[table.length - 1];
    if (prev + nums[i] > nums[i]) table.push(prev + nums[i]);
    else table.push(nums[i]);
  }
  return Math.max(...table);
};
