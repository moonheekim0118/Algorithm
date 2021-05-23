/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let cnt = 0;
  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];
  const n = grid.length;
  const m = grid[0].length;
  const visited = new Array(n);
  for (let i = 0; i < n; i++) {
    visited[i] = new Array(m).fill(false);
  }

  function dfs(x, y) {
    visited[x][y] = true;
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue;
      if (grid[nx][ny] === "0" || visited[nx][ny]) continue;
      dfs(nx, ny);
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === "1" && !visited[i][j]) {
        dfs(i, j);
        cnt++;
      }
    }
  }
  return cnt;
};
