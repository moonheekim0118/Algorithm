function solution(gems) {
  const gemSize = new Set(gems).size;
  const gemMap = new Map();
  const answers = [];

  gems.forEach((gem, i) => {
    console.log(gem, gemMap);
    gemMap.delete(gem);
    gemMap.set(gem, i);
    if (gemMap.size === gemSize) {
      answers.push([gemMap.values().next().value + 1, i + 1]);
    }
  });
  answers.sort((a, b) => {
    if (a[1] - a[0] === b[1] - b[0]) return a[1] - b[1];
    return a[1] - a[0] - b[1] - b[0];
  });
  return answers[0];
}

console.log(
  solution(["DIA", "RUBY", "RUBY", "DIA", "DIA", "EMERALD", "SAPPHIRE", "DIA"])
);

// node level3_보석쇼핑
