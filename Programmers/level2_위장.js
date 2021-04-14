function solution(clothes) {
  let answer = 1;
  const hashMap = new Map();
  for (let element of clothes) {
    const type = element[1];
    if (hashMap.has(type)) {
      const prev = hashMap.get(type);
      hashMap.set(type, prev + 1);
    } else {
      hashMap.set(type, 1);
    }
  }
  const values = [...hashMap.values()];
  for (let val of values) {
    answer *= val + 1;
  }
  return answer;
}

console.log(
  solution([
    ["a", "a"],
    ["b", "b"],
    ["c", "c"],
  ])
);
