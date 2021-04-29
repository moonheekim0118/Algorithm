/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var swap = function (nums, idx1, idx2) {
  const tmp = nums[idx1];
  nums[idx1] = nums[idx2];
  nums[idx2] = tmp;
};

var getPermutation = function (nums, ans, start, end) {
  if (start === end) {
    return ans.push([...nums]);
  }
  for (let i = start; i <= end; i++) {
    swap(nums, start, i);
    getPermutation(nums, ans, start + 1, end);
    swap(nums, start, i);
  }
};

var permute = function (nums) {
  const ans = [];
  getPermutation(nums, ans, 0, nums.length - 1);
  return ans;
};
permute([1, 2, 3]);
