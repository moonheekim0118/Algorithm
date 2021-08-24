/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} start
 * @param {number} end
 * @return {boolean}
 */
var validPath = function (n, edges, start, end) {
  const graph = new Map();

  edges.forEach(([a, b]) => {
    if (!graph.has(a)) graph.set(a, []);
    if (!graph.has(b)) graph.set(b, []);
    graph.get(a).push(b);
    graph.get(b).push(a);
  });

  const visited = new Array(n);
  const queue = [start];
  while (queue.length > 0) {
    const node = queue.shift();
    if (node === end) return true;
    visited[node] = true;
    graph.get(node).forEach((neighbor) => {
      if (!visited[neighbor]) queue.push(neighbor);
    });
  }
  return false;
};
