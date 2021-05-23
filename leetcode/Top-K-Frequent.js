/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const ans = [];
  const map = new Map();
  nums.forEach((v) => {
    if (map.has(v)) map.set(v, map.get(v) + 1);
    else map.set(v, 1);
  });
  const sorted = [...map.entries()].sort((a, b) => b[1] - a[1]);
  for (let i = 0; i < sorted.length; i++) {
    ans.push(sorted[i][0]);
    if (ans.length === k) break;
  }
  return ans;
};
