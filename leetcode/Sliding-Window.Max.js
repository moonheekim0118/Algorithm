/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  const dequeue = nums.slice(0, k);
  let max = Math.max(...dequeue);
  const ans = [Math.max(...dequeue)];
  for (let i = 1; i < nums.length - k + 1; i++) {
    const newNum = nums[i + k - 1];
    const removeNum = dequeue[0];
    dequeue.shift();
    dequeue.push(nums[i + k - 1]);
    if (max < newNum) {
      max = newNum;
    } else if (removeNum === max) {
      max = Math.max(...dequeue);
    }
    ans.push(max);
  }
  return ans;
};
