/**
 * @param {string} s
 * @return {boolean}
 */
var checkZeroOnes = function (s) {
  const size = s.length;
  function helper(target) {
    let begin = 0;
    let end = 0;
    let max = 0;
    while (begin < size) {
      if (s[begin] !== target) {
        begin++;
        end++;
      } else {
        do {
          end++;
        } while (end < size && s[end] == target);
        if (end >= size || s[end] !== target) end--;
        max = Math.max(max, end - begin + 1);
        begin = end + 1;
      }
    }
    return max;
  }

  const one = helper("1");
  const zero = helper("0");
  return one > zero;
};
