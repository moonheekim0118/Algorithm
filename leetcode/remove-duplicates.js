/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i - 1] === nums[i]) continue;
    const picked = nums[i];
    for (let j = i + 2; j < nums.length; j++) {
      if (nums[j] === picked) {
        nums.splice(j, 1);
        j--;
      } else break;
    }
  }
};

removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3]);

// node remove-duplicates

// splice에서 먼가 잘못되고잇음
