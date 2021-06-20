/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function (s) {
  const n = s.length;
  const map = new Map();
  for (let i = 0; i < n; i++) {
    map.set(s[i], map.has(s[i]) ? map.get(s[i]) + 1 : 1);
  }
  const max = Math.max(...map.values());
  const key = [...map.entries()].find((v) => v[1] === max)[0];
  map.delete(key);
  if (max > (n + 1) / 2) return "";

  let tmp = new Array(n);
  let index = 0;
  let count = 0;
  while (count < max) {
    tmp[index] = key;
    index += 2;
    count++;
  }
  index = 1;
  [...map.entries()].forEach((v) => {
    const key = v[0];
    const freq = v[1];
    let cnt = 0;
    while (cnt < freq) {
      tmp[index] = key;
      index += 2;
      cnt++;
    }
  });

  return tmp.join("");
};
