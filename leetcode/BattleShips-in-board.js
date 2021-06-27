/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function (board) {
  let battleShips = 0;
  const dx = [1, -1, 0, 0];
  const dy = [0, 0, -1, 1];
  const visited = new Set();
  const n = board.length;
  const m = board[0].length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (board[i][j] === "X") {
        if (visited.has(`${i}:${j}`)) continue;
        dfs(i, j);
        battleShips++;
      }
    }
  }
  function dfs(x, y) {
    visited.add(`${x}:${y}`);
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
      if (board[nx][ny] !== "X") continue;
      if (visited.has(`${nx}:${ny}`)) continue;
      dfs(nx, ny);
    }
  }
  return battleShips;
};
