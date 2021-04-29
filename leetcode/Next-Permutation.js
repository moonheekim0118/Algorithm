/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var swap = function (arr, idx1, idx2) {
  const temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
};

var subReverse = function (arr, start, end) {
  if (start > end) return;
  let num = 1;
  for (let i = start; i < (start + end) / 2; i++) {
    console.log(i, end - num);
    swap(arr, i, end - num);
    num++;
  }
};

var nextPermutation = function (nums) {
  let n = nums.length;
  let index = n - 1;
  if (n < 2) return;
  while (index > 0) {
    if (nums[index - 1] < nums[index]) break;
    index--;
  }

  if (index === 0) {
    nums.reverse();
  } else {
    const val = nums[index - 1];
    let j = n - 1;
    while (j >= index) {
      if (nums[j] > val) break;
      j--;
    }
    console.log(nums);
    swap(nums, j, index - 1);
    console.log(nums);
    subReverse(nums, index, n);
  }
  console.log(nums);
};

nextPermutation([5, 4, 7, 6, 5, 4]);
