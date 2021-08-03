/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
  let result = 0;
  let count = 0;

  for (let s of gain) {
    count += s;
    result = Math.max(result, count);
  }
  return result;
};
