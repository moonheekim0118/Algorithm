/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  // lowerbound and upper bound

  function getLowerBound() {
    let start = 0;
    let end = nums.length;
    while (start < end) {
      let mid = Math.floor((start + end) / 2);
      if (nums[mid] < target) {
        start = mid + 1;
      } else {
        end = mid;
      }
    }
    if (nums[start] !== target) return -1;
    return start;
  }

  function getUpperBound() {
    let start = 0;
    let end = nums.length;
    while (start < end) {
      let mid = Math.floor((start + end) / 2);
      if (nums[mid] <= target) start = mid + 1;
      else end = mid;
    }
    end--;
    if (nums[end] !== target) return -1;
    return end;
  }
  const lower = getLowerBound();
  const upper = getUpperBound();
  return [lower, upper];
};

searchRange([5, 7, 7, 8, 8, 10], 6);
