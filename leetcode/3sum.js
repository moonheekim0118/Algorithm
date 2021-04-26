/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var threeSum = function (nums) {
  const length = nums.length;
  if (length < 3) return [];
  const result = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < length; i++) {
    const a = nums[i];
    if (i > 0 && a === nums[i - 1]) continue;
    let left = i + 1;
    let right = length - 1;
    while (left < right) {
      const sum = a + nums[left] + nums[right];
      if (sum > 0) {
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        result.push([a, nums[left], nums[right]]);
        left++;
        while (nums[left] === nums[left - 1] && left < right) left++;
      }
    }
  }
  return result;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4]));
