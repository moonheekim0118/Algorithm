/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  const n = s.length;
  const m = t.length;
  let ans = "";
  let min = n + 1;
  for (let i = 0; i < n; i++) {
    const set = new Set(t.split(""), s[i]);
    let j = i + 1;
    while (j <= n) {
      const length = set.size;

      if (length === j - i) {
        if (min > length) {
          ans = s.slice(i, j);
          console.log(ans, set);
          min = length;
        }
        break;
      }
      set.add(s[j]);
      j++;
    }
  }
  return ans;
};
