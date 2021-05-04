/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

var combinationSum = function (candidates, target) {
  const answers = new Map();
  const List = [];
  for (let e of candidates) {
    let sum = e;
    const tmp = [];
    while (sum <= target) {
      tmp.push(e);
      sum += e;
      List.push([...tmp]);
    }
  }

  function getCombination(tmp, start) {
    const res = [].concat(...tmp);
    const sum = res.reduce((acc, curr) => acc + curr, 0);
    if (sum === target) {
      // array 푸르기
      answers.set(res.join(""), [...res]);
      return;
    } else if (sum > target) return;
    for (let i = start; i < List.length; i++) {
      tmp.push([...List[i]]);
      getCombination(tmp, i + 1);
      tmp.pop();
    }
  }
  getCombination([], 0);
  return [...answers.values()];
};

console.log(combinationSum([1], 2));
// node Combination-Sum
