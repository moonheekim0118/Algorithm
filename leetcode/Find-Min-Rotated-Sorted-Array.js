/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  const n = nums.length;
  if (n === 1) return nums[0];
  let left = 0;
  let right = n - 1;

  while (left < right) {
    if (nums[left] > nums[right]) {
      if (nums[right] < nums[right - 1]) return nums[right];
      left++;
    } else if (nums[right] > nums[left]) {
      if (left === 0 || nums[left - 1] > nums[left]) return nums[left];
      right--;
    }
  }
};
