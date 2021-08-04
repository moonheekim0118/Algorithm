/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const k = Math.floor(nums.length / 2);
  const hash = new Map();

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const count = hash.get(num) ?? 0;
    hash.set(num, count + 1);
  }
  return [...hash.entries()].sort((a, b) => b[1] - a[1])[0][0];
};
