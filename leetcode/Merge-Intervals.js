/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  const result = [];
  let lastValue = -1;
  for (let e of intervals) {
    if (lastValue >= e[0]) {
      const last = result.pop();
      lastValue = Math.max(lastValue, e[1]);
      const merged = [last[0], lastValue];
      result.push(merged);
    } else {
      result.push(e);
      lastValue = e[1];
    }
  }
  return result;
};

console.log(
  merge([
    [1, 4],
    [2, 3],
  ])
);

// node Merge-Intervals
