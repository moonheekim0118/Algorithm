/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  const answer = [];

  candidates.sort((a, b) => a - b);
  function backtrack(targetNumber, start, tmpArr) {
    if (targetNumber === 0) {
      answer.push([...tmpArr]);
      return;
    }
    if (targetNumber < 0) return;
    for (let i = start; i < candidates.length; i++) {
      const picked = candidates[i];
      if (i > start && candidates[i] === candidates[i - 1]) continue;
      tmpArr.push(picked);
      backtrack(targetNumber - picked, i + 1, tmpArr);
      tmpArr.pop();
    }
  }
  backtrack(target, 0, []);
  return [...answer.values()];
};
// node Combination-Sum2

console.log(combinationSum2([2, 5, 2, 1, 2], 5));
