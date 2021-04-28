/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */

var threeSum = function (nums, target, num) {
  const length = nums.length;
  let ans = [];
  for (let i = 0; i < length; i++) {
    const picked = nums[i];
    if (i > 0 && picked === nums[i - 1]) continue;
    let left = i + 1;
    let right = length - 1;
    while (left < right) {
      const sum = num + picked + nums[left] + nums[right];
      if (sum > target) {
        right--;
      } else if (sum < target) {
        left++;
      } else {
        ans.push([num, picked, nums[left], nums[right]]);
        left++;
        while (nums[left] === nums[left - 1] && left < right) left++;
      }
    }
  }
  return ans;
};
var fourSum = function (nums, target) {
  const length = nums.length;
  const ans = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < length; i++) {
    const picked = nums[i];
    if (i > 0 && picked === nums[i - 1]) continue;
    const fourSum = threeSum(nums.slice(i + 1), target, picked);
    ans.push(...fourSum);
  }
  return ans;
};

console.log(fourSum([1, 0, -1, 0, -2, 2], 0));
