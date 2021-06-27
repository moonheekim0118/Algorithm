/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let r = nums[0];
  function swap(a, b) {
    let temp = a;
    a = b;
    b = temp;
  }
  for (let i = 1, imax = r, imin = r; i < nums.length; i++) {
    if (nums[i] < 0) {
      swap(imax, imin);
    }
    imax = Math.max(nums[i], imax * nums[i]);
    imin = Math.max(nums[i], imin * nums[i]);

    r = max(r, imax);
  }
  return r;
};
