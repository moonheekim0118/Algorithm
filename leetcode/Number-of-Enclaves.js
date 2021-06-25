/**
 * @param {number[][]} grid
 * @return {number}
 */
var numEnclaves = function (grid) {
  const n = grid.length;
  const m = grid[0].length;
  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];

  const visited = new Map();
  let lands = 0;
  let flag = false;
  let sum = 0;
  for (let x = 0; x < n; x++) {
    for (let y = 0; y < m; y++) {
      if (grid[x][y] === 1) {
        lands++;
        if (!visited.has(`${x}:${y}`)) {
          const count = dfs(x, y);
          if (flag) {
            lands -= count;
            flag = false;
          }
        }
      }
    }
  }

  function dfs(x, y) {
    let sum = 1;
    if (x === n - 1 || x === 0 || y === m - 1 || y === 0) flag = true;
    visited.set(`${x}:${y}`, { x, y });
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (nx >= n || nx < 0 || ny >= m || ny < 0) continue;
      if (grid[nx][ny] === 0 || visited.has(`${nx}:${ny}`)) continue;
      sum += dfs(nx, ny);
    }
    return sum;
  }
  return lands;
};
