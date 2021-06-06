/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function (nums) {
  const result = [];
  function combination(temp, start) {
    if (temp.length >= 2) result.push([...temp]);
    for (let i = start; i < nums.length; i++) {
      const tempSize = temp.length;
      if (tempSize === 0 || temp[tempSize - 1] <= nums[i]) {
        temp.push(nums[i]);
        combination(temp, i + 1);
        temp.pop();
      }
    }
  }

  combination([], 0);
  return result;
};
