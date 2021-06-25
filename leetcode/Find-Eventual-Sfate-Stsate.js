/**
 * @param {number[][]} graph
 * @return {number[]}
 */

var eventualSafeNodes = function (graph) {
  const terminal = new Set();
  const safe = new Set();
  const unsafe = new Set();

  const visited = new Set();
  graph.forEach((outgoing, node) => {
    if (outgoing.length === 0) {
      terminal.add(node);
      safe.add(node);
    }
  });

  graph.forEach((_, node) => {
    dfs(node);
    visited.clear();
  });

  function dfs(start) {
    if (unsafe.has(start)) return false;
    if (terminal.has(start)) return true;
    visited.add(start);
    let flag = true;
    const outgoings = graph[start];

    for (let i = 0; i < outgoings.length; i++) {
      const node = outgoings[i];
      if (unsafe.has(node)) {
        flag = false;
        break;
      } else if (!visited.has(node)) {
        flag = dfs(node, visited);
        if (flag === false) break;
      } else {
        if (!safe.has(node)) {
          flag = false;
          break;
        }
      }
    }

    if (flag) safe.add(start);
    else {
      unsafe.add(start);
      safe.delete(start);
    }
    return flag;
  }

  return [...safe].sort((a, b) => a - b);
};
