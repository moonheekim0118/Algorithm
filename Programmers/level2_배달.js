function solution(N, road, K) {
  let answer = 0;
  let INF = 500001;

  const matrix = new Array(N + 1).fill(0).map(() => new Array(N + 1).fill(0));
  for (let e of road) {
    let distance = e[2];
    if (matrix[e[0]][e[1]]) {
      distance = Math.min(distance, matrix[e[0]][e[1]]);
    }
    matrix[e[0]][e[1]] = distance;
    matrix[e[1]][e[0]] = distance;
  }

  let dist = new Array(N + 1).fill(INF);
  let visited = new Array(N + 1).fill(false);

  function minDisatnce() {
    let min = INF;
    let minIdx = 0;
    for (let v = 1; v <= N; v++) {
      if (!visited[v] && dist[v] <= min) (min = dist[v]), (minIdx = v);
    }
    return minIdx;
  }
  function dijkstra() {
    dist[1] = 0;
    for (let count = 1; count <= N; count++) {
      const u = minDisatnce();
      visited[u] = true;
      for (let v = 1; v <= N; v++) {
        if (
          !visited[v] &&
          matrix[u][v] &&
          dist[u] !== INF &&
          dist[u] + matrix[u][v] < dist[v]
        ) {
          dist[v] = dist[u] + matrix[u][v];
        }
      }
    }
  }
  dijkstra();
  for (let i = 1; i <= N; i++) {
    if (dist[i] <= K) answer++;
  }
  return answer;
}

solution(
  6,
  [
    [1, 2, 1],
    [1, 3, 2],
    [2, 3, 2],
    [3, 4, 3],
    [3, 5, 2],
    [3, 5, 3],
    [5, 6, 1],
  ],
  4
);

// node level2_배달
