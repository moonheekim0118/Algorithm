/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  const m = matrix.length;
  const n = matrix[0].length;

  function upperBound() {
    let low = 0;
    let high = m;
    while (low < high) {
      let mid = low + Math.floor((high - low) / 2);
      if (matrix[mid][0] <= target) {
        low = mid + 1;
      } else {
        high = mid;
      }
    }
    return high;
  }

  function binarySearch(idx) {
    let left = 0;
    let right = n;
    while (left <= right) {
      let mid = left + Math.floor((right - left) / 2);
      if (matrix[idx][mid] === target) return true;
      else if (matrix[idx][mid] > target) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    return false;
  }
  const index = upperBound();
  return binarySearch(index === 0 ? 0 : index - 1);
};
