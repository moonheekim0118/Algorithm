function solution(genres, plays) {
  let answer = [];
  let size = genres.length;
  const hashMap = new Map();
  for (let i = 0; i < size; i++) {
    if (hashMap.has(genres[i])) {
      const data = hashMap.get(genres[i]);
      data.indexList = [...data.indexList, i];
      data.playSum += plays[i];
      hashMap.set(genres[i], data);
    } else {
      hashMap.set(genres[i], { playSum: plays[i], indexList: [i] });
    }
  }
  const result = [...hashMap.values()].sort((a, b) => b.playSum - a.playSum);
  for (let e of result) {
    const indexList = e.indexList.sort((a, b) => plays[b] - plays[a]);
    answer.push(...indexList.slice(0, 2));
  }
  return answer;
}

solution(
  ["classic", "pop", "classic", "classic", "pop"],
  [500, 600, 150, 800, 2500]
);

// node level3_베스트앨범
