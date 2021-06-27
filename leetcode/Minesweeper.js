/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
var updateBoard = function (board, click) {
  const dx = [1, -1, 0, 0, 1, -1, 1, -1];
  const dy = [0, 0, 1, -1, -1, 1, 1, -1];
  const n = board.length;
  const m = board[0].length;

  const target = board[click[0]][click[1]];

  if (target === "M") {
    board[click[0]][click[1]] = "X";
    return board;
  } else if (target === "E") {
    dfs(click[0], click[1]);
  }

  // E-> B로 변경
  function dfs(x, y) {
    board[x][y] = "B";
    let nearMines = nearMineCounter(x, y);
    if (nearMines > 0) {
      board[x][y] = `${nearMines}`;
      return;
    }
    for (let i = 0; i < 8; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
      if (board[nx][ny] !== "E") continue;
      dfs(nx, ny);
    }
  }

  function nearMineCounter(x, y) {
    let count = 0;
    for (let i = 0; i < 8; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
      if (board[nx][ny] === "M" || board[nx][ny] === "X") count++;
    }
    return count;
  }

  return board;
};
