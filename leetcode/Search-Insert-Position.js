/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let idx = nums.indexOf(target);
  if (idx === -1) {
    const inserted = nums.findIndex((v, i) => {
      if (i !== 0 && nums[i - 1] > target && v < target) return true;
      return false;
    });
    if (inserted === -1) idx = nums.length;
    idx = inserted;
  }
  return idx;
};
