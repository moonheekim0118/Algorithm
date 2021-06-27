/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function (nums) {
  nums.sort((a, b) => b - a);
  const n = nums.length;
  const w = nums[0];
  const x = nums[1];
  const y = nums[n - 1];
  const z = nums[n - 2];
  return w * x - y * z;
};
