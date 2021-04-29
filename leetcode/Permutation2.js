/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var swap = function (arr, idx1, idx2) {
  const temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
};

var getPermutation = function (arr, ans, start, end) {
  if (start === end) {
    return ans.set(arr.toString(), [...arr]);
  }
  for (let i = start; i <= end; i++) {
    swap(arr, start, i);
    if (ans.has(arr.toString())) {
      swap(arr, start, i);
      continue;
    }
    getPermutation(arr, ans, start + 1, end);
    swap(arr, start, i);
  }
};
var permuteUnique = function (nums) {
  const ans = new Map();
  nums.sort((a, b) => a - b);
  getPermutation(nums, ans, 0, nums.length - 1);
  return [...ans.values()];
};

console.log(permuteUnique([-1, 2, 0, -1, 1, 0, 1]));

// node Permutation2
