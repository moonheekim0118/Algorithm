/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  const result = [];
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    let init = nums[i];
    let prev = nums[i];
    if (i === n - 1) result.push(`${init}`);
    else {
      for (let j = i + 1; j <= n; j++) {
        if (nums[j] - 1 === prev) {
          prev = nums[j];
        } else {
          let window = init === prev ? `${init}` : `${init}->${prev}`;
          result.push(window);
          i = j - 1;
          break;
        }
      }
    }
  }
  return result;
};
