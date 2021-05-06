/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  const size = nums.length;
  if (size === 1) return nums;

  function swap(idx1, idx2) {
    const tmp = nums[idx1];
    nums[idx1] = nums[idx2];
    nums[idx2] = tmp;
  }

  for (let i = 0; i < size - 1; i++) {
    let smallest = i;
    for (let j = i + 1; j < size; j++) {
      if (nums[j] < nums[smallest]) {
        smallest = j;
        if (j === 0) break;
      }
    }
    swap(i, smallest);
  }
  return nums;
};

console.log(sortColors([2, 0, 2, 1, 1, 0]));

// node Sort-Colors
