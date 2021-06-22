/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  const nSet = new Set(nums1);
  const mSet = new Set(nums2);
  const result = [];

  [...nSet].forEach((v) => {
    if (mSet.has(v)) result.push(v);
  });
  return result;
};
