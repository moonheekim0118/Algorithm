/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function (nums1, nums2, k) {
  const n = nums1.length;
  const m = nums2.length;
  const map = new Map();
  function comb(ni, mi) {
    map.set(`${ni}:${mi}`, {
      sum: nums1[ni] + nums2[mi],
      value: [nums1[ni], nums2[mi]],
    });
    if (ni < n - 1) {
      comb(ni + 1, mi);
    }
    if (mi < m - 1) {
      comb(ni, mi + 1);
    }
  }
  comb(0, 0);
  return [...map.values()]
    .sort((a, b) => a.sum - b.sum)
    .splice(0, k)
    .map((v) => v.value);
};

console.log(kSmallestPairs([1, 1, 2], [1, 2, 3], 10));
// node Find-K-pairs-smallest-sum
