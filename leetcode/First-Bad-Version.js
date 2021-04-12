/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

isBadVersion = function (version) {
  return version >= 5;
};

var solution = function (n) {
  let min = 1;
  let max = n;
  let mid = Math.floor(min + (max - min) / 2);
  while (min < max) {
    console.log(min, max, mid);
    const result = isBadVersion(mid);
    if (result) {
      max = mid;
    } else {
      min = mid + 1;
    }
    mid = Math.floor(min + (max - min) / 2);
  }
  console.log(min, max, mid);
  return max;
};

console.log(solution(15));
