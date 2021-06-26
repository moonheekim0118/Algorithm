/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function (matrix) {
  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];
  const m = matrix.length;
  const n = matrix[0].length;
  const cache = new Map();
  let max = 0;

  function dfs(x, y) {
    const key = `${x}:${y}`;
    if (cache.has(key)) return cache.get(key);
    let count = 1;

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (nx < 0 || nx >= m || ny < 0 || ny >= n) continue;
      if (matrix[nx][ny] <= matrix[x][y]) continue;
      count = Math.max(dfs(nx, ny) + 1, count);
    }
    cache.set(key, count);
    return count;
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      max = Math.max(dfs(i, j), max);
    }
  }
  return max;
};
