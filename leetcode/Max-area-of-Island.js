/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  const n = grid.length;
  const m = grid[0].length;

  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];

  const visited = new Set();
  let island = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === 1 && !visited.has(`${i}:${j}`)) {
        island = Math.max(dfs(i, j), island);
      }
    }
  }

  function dfs(x, y) {
    let nums = 1;
    visited.add(`${x}:${y}`);

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
      if (visited.has(`${nx}:${ny}`)) continue;
      if (grid[nx][ny] === 0) continue;
      nums += dfs(nx, ny);
    }
    return nums;
  }

  return island;
};
