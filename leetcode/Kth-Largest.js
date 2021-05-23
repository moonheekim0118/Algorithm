/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  const sorted = [...new Set(nums)].sort((a, b) => a - b);
  return sorted[k];
};
