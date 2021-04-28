/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b);
  let min = 10000000000;
  let ans = 0;
  const length = nums.length;
  for (let i = 0; i < length; i++) {
    const picked = nums[i];
    if (i > 0 && picked === nums[i - 1]) continue;
    let left = i + 1;
    let right = length - 1;
    while (left < right) {
      let sum = picked + nums[left] + nums[right];
      const diff = Math.abs(target - sum);
      if (diff < min) {
        min = diff;
        ans = sum;
      }
      if (sum > target) {
        right--;
      } else if (sum < target) {
        left++;
      } else {
        return sum;
      }
    }
  }
  return ans;
};

console.log(threeSumClosest([-1, 2, 1, -4], 1));
