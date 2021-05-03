function solution(tickets) {
  const STATIC_DEPATURE = "ICN";
  const answer = [];
  const Map = {};

  for (let info of tickets) {
    const from = info[0];
    const to = info[1];
    if (Map[from]) Map[from].push(to);
    else Map[from] = [to];
  }
  let size = tickets.length;
  let visited = {};

  function dfs(from, cnt, tmp) {
    if (cnt === size) {
      return answer.push([...tmp]);
    }
    if (Map[from]) {
      for (let i = 0; i < Map[from].length; i++) {
        const to = Map[from][i];
        const key = `${from}-${to}-${i}`;
        if (!visited[key]) {
          tmp.push(to);
          visited[key] = true;
          dfs(to, cnt + 1, tmp);
          visited[key] = false;
          tmp.pop();
        }
      }
    }
  }
  dfs(STATIC_DEPATURE, 0, [STATIC_DEPATURE]);
  return answer.sort((a, b) => a.join("").localeCompare(b.join("")))[0];
}

console.log(
  solution([
    ["ICN", "A"],
    ["ICN", "A"],
    ["A", "ICN"],
    ["A", "C"],
  ])
);

// node level3_여행경로
