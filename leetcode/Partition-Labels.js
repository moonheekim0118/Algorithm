/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
  const answers = [];

  const size = s.length;

  // target 이 마지막으로 나온 index 찾아줌
  function findLastIndex(target, start) {
    let idx = start;
    let j = start;
    while (j < size) {
      if (s[j] === target) idx = j;
      j++;
    }
    return idx;
  }
  function helper(start) {
    const checker = new Set();
    let i = start;
    let j = findLastIndex(s[i], i);
    checker.add(s[i]);
    while (i < j) {
      if (checker.has(s[i])) i++;
      else {
        checker.add(s[i]);
        j = Math.max(findLastIndex(s[i], i), j);
        i++;
      }
    }
    return i;
  }

  let start = 0;

  while (start < size) {
    const end = helper(start);
    answers.push(end - start);
    start = end + 1;
  }
  return answers;
};
