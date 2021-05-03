/**
 * @param {number[]} nums
 * @return {number}
 */

var jump = function (nums) {
  let jump = 0;
  let ladder = 0;
  let stairs = 0;
  for (let i = 0; i < nums.length; i++) {
    ladder = Math.max(i + nums[i], ladder);
    if (i === stairs) {
      jump++;
      stairs = ladder;
    }
  }
};

console.log(jump([5, 9, 3, 2, 1, 0, 2, 3, 3, 1, 0, 0]));

// node Jump-Game2
