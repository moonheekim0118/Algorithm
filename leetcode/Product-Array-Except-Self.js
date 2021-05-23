/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const ans = [];
  for (let i = 0; i < nums.length; i++) {
    const sum = nums.reduce((prev, curr, idx) => {
      if (idx === i) return prev;
      return (prev *= curr);
    }, 1);
    ans.push(sum);
  }
  return ans;
};
