/**
 * @param {number[]} difficulty
 * @param {number[]} profit
 * @param {number[]} worker
 * @return {number}
 */
// var maxProfitAssignment = function (difficulty, profit, worker) {
//   const results = [];
//   const n = difficulty.length;
//   const m = worker.length;

//   function helper(limit) {
//     let i = 0;
//     let max = 0;
//     while (i < n) {
//       if (difficulty[i] <= limit) {
//         max = Math.max(max, profit[i]);
//       }
//       i++;
//     }
//     return max;
//   }

//   worker.forEach((limit) => {
//     results.push(helper(limit));
//   });
//   return results.reduce((curr, prev) => (prev += curr), 0);
// };

var maxProfitAssignment = function (difficulty, profit, worker) {
  const results = [];
  const n = difficulty.length;
  const m = worker.length;

  function helper(limit) {
    let i = 0;
    let max = 0;
    while (i < n) {
      if (difficulty[i] <= limit) {
        max = Math.max(max, profit[i]);
      }
      i++;
    }
    return max;
  }

  worker.forEach((limit) => {
    results.push(helper(limit));
  });
  return results.reduce((curr, prev) => (prev += curr), 0);
};
