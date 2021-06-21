function solution(n, results) {
  var answer = 0;
  const map = new Map();
  for (let i = 1; i <= n; i++) {
    map.set(i, { winWith: new Set(), loseBy: new Set() });
  }

  results.forEach(([winner, loser]) => {
    const winnerInfo = map.get(winner);
    map.set(winner, {
      ...winnerInfo,
      winWith: new Set([...winnerInfo.winWith, loser]),
    });
    const loserInfo = map.get(loser);
    map.set(loser, {
      ...loserInfo,
      loseBy: new Set([...loserInfo.loseBy, winner]),
    });
  });

  const visitied = new Set();
  for (let i = 1; i <= n; i++) {
    visitied.clear();
    const { winWith, loseBy } = map.get(i);
    if (winWith.size + loseBy.size === n - 1) continue;
    const winResult = getWinners(i);
    visitied.clear();
    const loseResult = getLosers(i);

    map.set(i, {
      winWith: new Set([...winResult, ...winWith]),
      loseBy: new Set([...loseResult, ...loseBy]),
    });
  }

  function getWinners(start) {
    visitied.add(start);
    const { winWith } = map.get(start);
    const winList = [];
    [...winWith].forEach((v) => {
      if (!visitied.has(v)) {
        const addedWin = getWinners(v);
        winList.push(...addedWin);
      }
    });
    return new Set([...winWith, ...winList]);
  }

  function getLosers(start) {
    visitied.add(start);
    const { loseBy } = map.get(start);
    const loseList = [];
    [...loseBy].forEach((v) => {
      if (!visitied.has(v)) {
        const addedLost = getLosers(v);
        loseList.push(...addedLost);
      }
    });
    return new Set([...loseBy, ...loseList]);
  }

  [...map.values()].forEach(({ winWith, loseBy }) => {
    const size = winWith.size + loseBy.size;
    if (size === n - 1) answer++;
  });
  return answer;
}

console.log(
  solution(5, [
    [1, 4],
    [4, 2],
    [2, 5],
    [5, 3],
  ])
);

// node level3_순위.js

// A 가 B를 이겼고, B가 C를 이겼다면  A는 B와 C를 이긴다.
// 이를 이용해서 A가 이긴리스트-> 해당 리스트의 이김....이렇게 다 보고있는데..흠..이렇게하면 뭔가잘못되는듯.ㅠ
