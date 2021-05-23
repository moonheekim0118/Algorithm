/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  const size = nums.length;
  let min = Number.MAX_VALUE;
  for (let i = 0; i < size; i++) {
    const pick = nums[i];
    if (pick >= target) return 1;
    let sums = pick;
    let j = i + 1;
    while (j < size) {
      sums += nums[j];
      if (sums >= target) break;
      j++;
    }
    if (sums >= target) {
      min = Math.min(j - i + 1, min);
    }
  }
  return min === Number.MAX_VALUE ? 0 : min;
};
