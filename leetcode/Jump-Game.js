// node Jump-Game

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let i = 0;
  let max = nums[i];
  // i < = max 라면.. 즉 , max 노드가 더이상 나아갈수없다면 끝
  while (i < nums.length && i <= max) {
    const newMax = nums[i] + i;
    max = Math.max(max, newMax);
    i++;
  }
  return i === nums.length;
};

console.log(canJump([5, 4, 0, 2, 0, 1, 0, 1, 0]));
