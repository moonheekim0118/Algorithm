/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  const hash = new Map();
  for (let i = 0; i < s.length; i++) {
    const curr = s[i];
    const rcd = hash.get(curr);
    hash.set(curr, rcd ? rcd + 1 : 1);
  }
  const sorted = [...hash.entries()].sort((a, b) => {
    const first = b[1] - a[1];
    return first === 0 ? b[0].localeCompare(a[0]) : first;
  });
  const answer = sorted.map((v) => v[0].repeat(v[1])).join("");
  return answer;
};
