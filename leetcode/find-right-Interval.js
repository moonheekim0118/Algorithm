/**
 * @param {number[][]} intervals
 * @return {number[]}
 */
var findRightInterval = function (intervals) {
  const size = intervals.length;
  const indexMap = new Map();
  intervals.forEach((interval, index) => {
    indexMap.set(`${interval}`, index);
  });

  const sorted = [...intervals].sort((a, b) => a[0] - b[0]);

  function helper(target) {
    let left = 0;
    let right = size;
    // target보다 크거나 같은 것
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (sorted[mid][0] < target) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
    if (right === size || sorted[right][0] < target) return -1;
    return indexMap.get(`${sorted[right]}`);
  }

  const answer = intervals.map((interval) => helper(interval[1]));
  return answer;
};
