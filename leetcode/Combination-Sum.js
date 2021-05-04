/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

// var combinationSum = function (candidates, target) {
//   const answers = new Map();
//   const List = [];
//   for (let e of candidates) {
//     let sum = e;
//     const tmp = [];
//     while (sum <= target) {
//       tmp.push(e);
//       sum += e;
//       List.push([...tmp]);
//     }
//   }

//   function getCombination(tmp, start) {
//     const res = [].concat(...tmp);
//     const sum = res.reduce((acc, curr) => acc + curr, 0);
//     if (sum === target) {
//       // array 푸르기
//       answers.set(res.join(""), [...res]);
//       return;
//     } else if (sum > target) return;
//     for (let i = start; i < List.length; i++) {
//       tmp.push([...List[i]]);
//       getCombination(tmp, i + 1);
//       tmp.pop();
//     }
//   }
//   getCombination([], 0);
//   return [...answers.values()];
// };

var combinationSum = function (candidates, target) {
  const answers = new Set();
  const size = candidates.length;

  function getCombination(targetNumber, start, tmpArr) {
    if (targetNumber === 0) {
      return answers.add([...tmpArr]);
    }
    if (targetNumber < 0) return;

    for (let i = start; i < size; i++) {
      tmpArr.push(candidates[i]);
      getCombination(targetNumber - candidates[i], i, tmpArr);
      tmpArr.pop();
    }
  }
  getCombination(target, 0, []);
  return [...answers.values()];
};

console.log(combinationSum([1], 2));
// node Combination-Sum
