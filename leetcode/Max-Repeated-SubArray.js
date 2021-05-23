/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function (nums1, nums2) {
  const n = nums1.length;
  const m = nums2.length;

  let res = 0;
  const lcs = new Array(n + 1);
  for (let i = 0; i < n + 1; i++) {
    lcs[i] = new Array(m + 1).fill(0);
  }
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (nums1[i - 1] === nums2[j - 1]) lcs[i][j] = lcs[i - 1][j - 1] + 1;
      res = Math.max(res, lcs[i][j]);
    }
  }
  return res;
};
