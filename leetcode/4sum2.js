/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */

var fourSumCount = function (nums1, nums2, nums3, nums4) {
  const HashMap = new Map();
  for (let a of nums1) {
    for (let b of nums2) {
      HashMap.set(a + b, (HashMap.get(a + b) || 0) + 1);
    }
  }
  let count = 0;
  for (let c of nums3) {
    for (let d of nums4) {
      console.log(c + d, -c - d);
      if (HashMap.has(-c - d)) {
        count += HashMap.get(-c - d);
      }
    }
  }
};

fourSumCount([1, 2], [-2, -1], [-1, 2], [0, 2]);
