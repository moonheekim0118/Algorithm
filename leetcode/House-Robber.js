/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    if (i <= 1) continue;
    const pre = nums.slice(0, i - 1);
    const max = Math.max(...pre);
    nums[i] = max + nums[i];
  }
  return Math.max(...nums);
};
