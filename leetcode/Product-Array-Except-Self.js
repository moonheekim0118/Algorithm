/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const sum = nums.reduce((prev, curr) => (prev *= curr), 1);
  const zeros = nums.filter((v) => v !== 0);
  let withoutZero = 0;
  if (zeros.length === nums.length - 1) {
    withoutZero = zeros.reduce((prev, curr) => (prev *= curr), 1);
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) nums[i] = withoutZero;
    else {
      nums[i] = Math.floor(sum / nums[i]);
    }
  }
  return nums;
};
