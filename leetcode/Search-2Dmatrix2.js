var searchMatrix = function (matrix, target) {
  const m = matrix.length;
  let col = matrix[0].length - 1;
  let row = 0;

  while (col >= 0 && row < m) {
    if (target === matrix[row][col]) return true;
    else if (target < matrix[row][col]) col--;
    else if (target > matrix[row][col]) row++;
  }
  return false;
};
