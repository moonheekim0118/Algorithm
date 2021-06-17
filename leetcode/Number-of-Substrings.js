/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function (s) {
  let counter = new Map();
  let res = 0;
  let j = 0;
  const n = s.length;
  counter.set("a", 0);
  counter.set("b", 0);
  counter.set("c", 0);
  for (let i = 0; i < n; i++) {
    counter.set(s[i], counter.get(s[i]) + 1);
    while (
      counter.get("a") > 0 &&
      counter.get("b") > 0 &&
      counter.get("c") > 0
    ) {
      const picked = s[j++];
      counter.set(picked, counter.get(picked) - 1);
    }
    res += j;
  }
  return res;
};
