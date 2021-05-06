/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const results = [];
  const size = nums.length;

  function getCombs(n, c, start, tmp) {
    if (c === n) {
      results.push([...tmp]);
      return;
    }
    for (let i = start; i < size; i++) {
      tmp.push(nums[i]);
      getCombs(n, c + 1, i + 1, tmp);
      tmp.pop();
    }
  }
  for (let i = 0; i <= size; i++) {
    getCombs(i, 0, 0, []);
  }
  return results;
};

console.log(subsets([1, 2, 3]));
// node Subsets
