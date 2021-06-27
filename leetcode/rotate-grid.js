/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var rotateGrid = function (grid, k) {
  const m = grid.length;
  const n = grid[0].length;
  function assign(l, v, start) {
    for (let i = l; i < n - l - 1; i++) {
      grid[l][i] = v[start++];
    }

    for (let i = l; i < m - l - 1; i++) {
      grid[i][n - l - 1] = v[start++];
    }

    for (let i = n - l - 1; i > l; i--) {
      grid[m - l - i][i] = v[start++];
    }

    for (let i = m - l - 1; i > l; i--) {
      grid[i][l] = v[start++];
    }
  }
  function rotate() {
    let circles = Math.min(m, n) / 2;
    for (let l = 0; l < circles; l++) {
      const v = [];
      for (let i = l; i < n - l - 1; i++) {
        v.push(grid[l][i]);
      }

      for (let i = l; i < m - l - 1; i++) {
        v.push(grid[i][n - l - 1]);
      }

      for (let i = n - l - 1; i > l; i--) {
        v.push(grid[m - l - 1][i]);
      }

      for (let i = m - l - 1; i > l; i--) {
        v.push(grid[i][l]);
      }
      let kk = k % v.length;
      for (let i = 0; i < kk; i++) {
        v.push(v[i]);
      }

      assign(l, v, kk);
    }
  }
  rotate();
  return grid;
};
