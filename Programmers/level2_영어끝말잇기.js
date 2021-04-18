function solution(n, words) {
  const hashMap = new Map();
  let prev = "";
  let cnt = 0;
  for (let i = 0, len = words.length; i < len; i++) {
    const picked = (i + 1) % n;
    // 탈락
    if (prev !== "" && prev !== words[i][0]) {
      return [picked || n, cnt + 1];
    }
    if (words[i].length <= 1) return [picked || n, cnt + 1];
    if (hashMap.has(words[i])) return [picked || n, cnt + 1];
    if (picked === 0) cnt++;
    hashMap.set(words[i], true);
    prev = words[i].slice(-1);
  }
  return [0, 0];
}

console.log(
  solution(2, ["hello", "one", "even", "never", "now", "world", "draw"])
);
