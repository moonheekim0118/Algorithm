function solution(n, costs) {
  const INF = Number.MAX_VALUE;
  const visited = new Array(n).fill(false);
  const map = new Array(n);
  for (let i = 0; i < n; i++) {
    map[i] = new Array(n).fill(INF);
  }
  const dist = new Array(n).fill(INF);
  for (let cost of costs) {
    const x = cost[0];
    const y = cost[1];
    const c = cost[2];
    map[x][y] = c;
    map[y][x] = c;
  }

  function getMinNode() {
    let min = INF;
    let minIdx = 0;
    for (let v = 0; v < n; v++) {
      if (!visited[v] && dist[v] <= min) {
        min = dist[v];
        minIdx = v;
      }
    }
    return minIdx;
  }
  function dijkstra() {
    dist[0] = 0;
    for (let i = 0; i < n; i++) {
      const u = getMinNode();
      visited[u] = true;
      for (let v = 0; v < n; v++) {
        if (
          !visited[v] &&
          map[u][v] !== INF &&
          dist[u] !== INF &&
          map[u][v] < dist[v]
        ) {
          dist[v] = map[u][v];
        }
      }
    }
  }
  dijkstra();
  return dist.reduce((acc, prev) => acc + prev, 0);
}

console.log(
  solution(4, [
    [0, 1, 1],
    [0, 2, 2],
    [1, 2, 5],
    [1, 3, 1],
    [2, 3, 8],
  ])
);

// node level3_섬연결하기
