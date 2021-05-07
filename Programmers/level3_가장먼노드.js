function solution(n, edge) {
  let max = 0;
  const matrix = {};
  for (let e of edge) {
    const x = e[0] - 1;
    const y = e[1] - 1;
    if (matrix[x]) {
      matrix[x].push(y);
    }
    if (matrix[y]) {
      matrix[y].push(x);
    }
    if (!matrix[x]) {
      matrix[x] = [y];
    }
    if (!matrix[y]) {
      matrix[y] = [x];
    }
  }

  const dist = new Array(n).fill(-1);
  const visited = new Array(n).fill(false);

  function getMinNode() {
    let min = Number.MAX_VALUE;
    let minIndex = -1;
    for (let i = 0; i < n; i++) {
      if (dist[i] !== -1 && !visited[i] && dist[i] < min) {
        min = dist[i];
        minIndex = i;
      }
    }
    return minIndex;
  }

  function dijkstra() {
    dist[0] = 0;
    for (let i = 0; i < n; i++) {
      const u = getMinNode();
      if (u === -1) return; // 더이상 찾을 노드 없음
      visited[u] = true;
      const connectedList = matrix[u];
      for (let v of connectedList) {
        if (!visited[v] && (dist[v] === -1 || dist[v] > dist[u] + 1)) {
          dist[v] = dist[u] + 1;
          max = Math.max(dist[v], max);
        }
      }
    }
  }
  dijkstra();
  return dist.filter((v) => v === max).length;
}

console.log(
  solution(6, [
    [3, 6],
    [4, 3],
    [3, 2],
    [1, 3],
    [1, 2],
    [2, 4],
    [5, 2],
  ])
);
// node level3_가장먼노드
