/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  function helper(str) {
    let num = "";
    const hash = new Map();
    for (let i = 0; i < str.length; i++) {
      const curr = str[i];
      if (hash.has(curr)) {
        num += `+${hash.get(curr)}`;
      } else {
        hash.set(curr, i);
        num += `+${i}`;
      }
    }

    return num;
  }

  return helper(s) === helper(t);
};
