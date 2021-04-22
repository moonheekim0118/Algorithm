/**
 * @param {number[]} height
 * @return {number}
 */

var getSize = function (h1, h2, size) {
  const vertical = Math.min(h1, h2);
  return vertical * size;
};

var maxArea = function (height) {
  let x = height.length - 1;
  let y = 0;
  let MAX = 0;
  let area = 0;
  while (x !== y) {
    if (height[y] > height[x]) {
      area = height[x] * (x - y);
      x--;
    } else {
      area = height[y] * (x - y);
      y++;
    }
    MAX = Math.max(area, MAX);
  }

  return MAX;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 25, 7]));
