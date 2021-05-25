/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  const n = s.length;
  const m = t.length;

  const dictionary = [...new Array(128)].reduce((acc, _, index) => {
    return { ...acc, [+index]: 0 };
  }, {});
  for (let i = 0; i < m; i++) {
    dictionary[t[i].charCodeAt(0)]++;
  }
  let head = 0;
  let begin = 0;
  let end = 0;
  let cnt = m;
  let min = Number.MAX_VALUE;

  while (end < n) {
    if (dictionary[s[end++].charCodeAt(0)]-- > 0) cnt--;
    while (cnt === 0) {
      if (end - begin < min) {
        min = end - begin;
        head = begin;
      }
      if (dictionary[s[begin++].charCodeAt(0)]++ === 0) cnt++;
    }
  }
  return min === Number.MAX_VALUE ? "" : s.substr(head, min);
};
