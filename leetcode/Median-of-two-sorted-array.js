/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const nums = [...nums1, ...nums2].sort((a, b) => a - b);
  const length = nums.length;
  if (length === 1) {
    nums[0].toFixed(5);
  }

  if (length % 2 === 0) {
    const center = length / 2;
    const result = (nums[center - 1] + nums[center]) / 2;
    return result.toFixed(5);
  } else {
    const center = Math.floor(length / 2);
    return nums[center].toFixed(5);
  }
};

console.log(findMedianSortedArrays([0, 0], [0, 0]));
