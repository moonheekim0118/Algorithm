/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  // 이미 0으로 채워진 곳 저장하고..
  const rows = new Set();
  const cols = new Set();
  const m = matrix.length;
  const n = matrix[0].length;
  const visited = new Array(m);
  for (let i = 0; i < m; i++) {
    visited[i] = new Array(n).fill(false);
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0 && !visited[i][j]) {
        zerofiy(i, j);
      }
    }
  }

  function zerofiy(row, col) {
    if (!rows.has(row)) {
      for (let i = 0; i < n; i++) {
        if (matrix[row][i] !== 0) {
          visited[row][i] = true;
        }
        matrix[row][i] = 0;
      }
      rows.add(row);
    }
    if (!cols.has(col)) {
      for (let i = 0; i < m; i++) {
        if (matrix[i][col] !== 0) {
          visited[i][col] = true;
        }
        matrix[i][col] = 0;
      }
      cols.add(col);
    }
  }
};

setZeroes([
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5],
]);
// node Set-Matrix-Zeros
