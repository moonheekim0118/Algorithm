/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
  const row = grid.length;
  const col = grid[0].length;
  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];
  let perimeter = 0;
  const visited = new Set();

  function dfs(x, y) {
    visited.add(`${x}:${y}`);

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (visited.has(`${nx}:${ny}`)) continue;
      if (nx === row || ny === col || nx < 0 || ny < 0) {
        perimeter++;
        continue;
      }

      if (grid[nx][ny] === 0) {
        perimeter++;
        continue;
      }
      dfs(nx, ny);
    }
  }

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] === 1) {
        dfs(i, j);
        return perimeter;
      }
    }
  }

  return perimeter;
};
