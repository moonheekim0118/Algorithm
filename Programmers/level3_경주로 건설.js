// 0 왼 / 1 오/ 2 위 / 3 아래
function solution(board) {
  const n = board.length;
  const dx = [0, 0, -1, 1];
  const dy = [-1, 1, 0, 0];
  const queue = [];
  if (board[0][1] === 0) {
    queue.push({ x: 0, y: 1, cost: 100, direction: 1 });
    board[0][1] = 100;
  }
  if (board[1][0] === 0) {
    queue.push({ x: 1, y: 0, cost: 100, direction: 3 });
    board[1][0] = 100;
  }
  let min = Number.MAX_VALUE;
  while (queue.length !== 0) {
    const { x, y, cost, direction } = queue.shift();
    if (x === n - 1 && y === n - 1) {
      min = Math.min(min, cost);
      continue;
    }
    for (let i = 0; i < 4; i++) {
      const nx = dx[i] + x;
      const ny = dy[i] + y;

      if (nx < 0 || nx >= n || ny < 0 || ny >= n) continue;
      if (board[nx][ny] === 1) continue;
      let newCost = cost + 100;
      if (direction !== i) newCost += 500;
      if (board[nx][ny] === 0 || newCost <= board[nx][ny]) {
        queue.push({ x: nx, y: ny, cost: newCost, direction: i });
        board[nx][ny] = newCost;
      }
    }
  }
  return min;
}
