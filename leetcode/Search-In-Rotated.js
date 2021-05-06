// node Search-In-Rotated

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  const pivot = nums[0];
  const size = nums.length;
  let index = 0;
  function getLowerBound() {
    let start = 1;
    let end = size;
    while (start < end) {
      const mid = Math.floor((start + end) / 2);
      if (nums[mid] < pivot) {
        end = mid;
      } else {
        start = mid + 1;
      }
    }
    return end;
  }

  function binarySearch(start, end, target) {
    let mid = Math.floor((start + end) / 2);
    while (start < end) {
      if (nums[mid] < target) {
        start = mid + 1;
      } else if (nums[mid] > target) {
        end = mid - 1;
      } else {
        break;
      }
      mid = Math.floor((start + end) / 2);
    }
    return nums[mid] !== target ? -1 : mid;
  }

  index = getLowerBound();
  if (target >= pivot) {
    return binarySearch(0, index - 1, target);
  } else {
    return binarySearch(index, size - 1, target);
  }
};

console.log(search([1, 3], 1));
