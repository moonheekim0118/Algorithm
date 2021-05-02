function solution(maps) {
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];
  const n = maps.length;
  const m = maps[0].length;
  const queue = [];
  queue.push({ x: 0, y: 0 });
  while (queue.length > 0) {
    const pop = queue.shift();
    const { x, y } = pop;
    for (let i = 0; i < 4; i++) {
      const nx = pop.x + dx[i];
      const ny = pop.y + dy[i];
      if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
      if (maps[nx][ny] === 1 || maps[nx][ny] > maps[x][y] + 1) {
        maps[nx][ny] = maps[x][y] + 1;
        queue.push({ x: nx, y: ny });
      }
    }
  }

  const result = maps[n - 1][m - 1];
  return result === 1 ? -1 : result;
}

solution([
  [1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 0, 1],
  [0, 0, 0, 0, 1],
]);

// node level2_게임맵최단거리
