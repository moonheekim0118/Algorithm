/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const rows = board.length;
  const cols = board[0].length;
  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];
  let found = false;
  let visited = {};
  function dfs(x, y, idx) {
    if (idx === word.length) {
      found = true;
      return true;
    }
    let res;
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      const key = `${nx}:${ny}`;
      if (
        nx < 0 ||
        ny < 0 ||
        nx >= rows ||
        ny >= cols ||
        board[nx][ny] !== word[idx] ||
        visited[key]
      )
        continue;
      visited[key] = true;
      res = dfs(nx, ny, idx + 1);
      if (!res) visited[key] = false;
    }
    if (!res) return false;
    else return res;
  }
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (board[i][j] === word[0]) {
        visited[`${i}:${j}`] = true;
        dfs(i, j, 1);
        visited = {};
        if (found) return true;
      }
    }
  }
  return false;
};

console.log(
  exist(
    [
      ["A", "B", "C", "E"],
      ["S", "F", "E", "S"],
      ["A", "D", "E", "E"],
    ],
    "ABCESEEEFS"
  )
);

// node word-search
