/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function (heights) {
  const n = heights.length;
  const m = heights[0].length;
  const result = [];
  const a_visited = new Set();
  const p_visited = new Set();
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, 1, -1];
  for (let i = 0; i < n; i++) {
    dfs(i, 0, p_visited);
    dfs(i, m - 1, a_visited);
  }

  for (let i = 0; i < m; i++) {
    dfs(0, i, p_visited);
    dfs(n - 1, i, a_visited);
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      const key = `${i}:${j}`;
      if (p_visited.has(key) && a_visited.has(key)) {
        result.push([i, j]);
      }
    }
  }

  function dfs(x, y, visited) {
    visited.add(`${x}:${y}`);

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (
        nx < 0 ||
        nx >= n ||
        ny < 0 ||
        ny >= m ||
        visited.has(`${nx}:${ny}`) ||
        heights[nx][ny] < heights[x][y]
      )
        continue;
      dfs(nx, ny, visited);
    }
  }
  return result;
};
