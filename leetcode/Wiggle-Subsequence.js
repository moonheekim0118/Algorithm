/**
 * @param {number[]} nums
 * @return {number}
 */

var wiggleMaxLength = function (nums) {
  const n = nums.length;
  let cnt = 1;
  let prevDiff = 0;
  for (let i = 1; i < n; i++) {
    let diff = nums[i] - nums[i - 1];
    if ((diff > 0 && prevDiff <= 0) || (diff < 0 && prevDiff >= 0)) {
      cnt++;
      prevDiff = diff;
    }
  }
  return cnt;
};
