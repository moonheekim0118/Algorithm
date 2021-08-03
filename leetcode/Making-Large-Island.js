const DIRECTIONS = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

function largestIsland(grid) {
  const m = grid.length;
  const n = grid[0].length;
  let max = Number.MIN_VALUE;
  let count = 2;
  let map = {};

  function dfs(row, col, num) {
    if (row < 0 || row >= m || col < 0 || col >= n) return 0;
    if (grid[row][col] === 0 || grid[row][col] === num) return 0;
    grid[row][col] = num;
    return (
      1 +
      dfs(row + 1, col, num) +
      dfs(row - 1, col, num) +
      dfs(row, col + 1, num) +
      dfs(row, col - 1, num)
    );
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        const area = dfs(i, j, count);
        max = Math.max(max, area);
        map[count] = area;
        count++;
      }
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 0) {
        const set = new Set();
        let cur = 1;

        for (let [row, col] of DIRECTIONS) {
          const x = row + i;
          const y = col + j;

          if (x < 0 || x >= m || y < 0 || y >= n) continue;
          const isIsland = grid[x][y];
          if (isIsland > 1 && !set.has(isIsland)) {
            set.add(isIsland);
            cur += map[isIsland];
          }
        }
        max = Math.max(max, cur);
      }
    }
  }
  return max;
}
