/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
  const n = nums.length;
  const k = Math.floor(n / 3);

  nums.sort();
  const ans = [];
  let prev = nums[0];
  let count = 1;
  for (let i = 1; i <= n; i++) {
    if (prev === nums[i]) count++;
    else {
      if (count > k) ans.push(prev);
      prev = nums[i];
      count = 1;
    }
  }
  return ans;
};
