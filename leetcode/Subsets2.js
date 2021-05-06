/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  const results = [];
  const size = nums.length;
  const checker = {};
  nums.sort((a, b) => a - b);

  function getCombs(n, c, start, tmp) {
    if (c === n) {
      const key = tmp.sort((a, b) => a - b).join(":");
      if (checker[key]) return;
      results.push([...tmp]);
      checker[key] = true;
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

console.log(subsetsWithDup([4, 4, 4, 1, 4]));

// node Subsets2
