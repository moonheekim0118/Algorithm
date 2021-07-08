/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  const size = height.length;
  if (size === 0) return 0;
  let ans = 0;
  const left_max = new Array(size);
  const right_max = new Array(size);

  left_max[0] = height[0];
  for (let i = 1; i < size; i++) {
    left_max[i] = Math.max(height[i], left_max[i - 1]);
  }

  right_max[size - 1] = height[size - 1];
  for (let i = size - 2; i >= 0; i--) {
    right_max[i] = Math.max(height[i], right_max[i + 1]);
  }

  for (let i = 1; i < size - 1; i++) {
    ans += Math.min(left_max[i], right_max[i]) - height[i];
  }
  return ans;
};
