/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
  let smallest = Number.MAX_VALUE;
  let largest = Number.MAX_VALUE;

  for (let num of nums) {
    if (num <= smallest) smallest = num;
    else if (num <= largest) largest = num;
    else return true;
  }
  return false;
};
