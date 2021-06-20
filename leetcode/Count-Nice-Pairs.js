/**
 * @param {number[]} nums
 * @return {number}
 */
var countNicePairs = function (nums) {
  const hash = new Map();
  nums.forEach((num) => {
    const reversed = parseInt(num.toString().split("").reverse().join(""));
    const sum = reversed - num;
    hash.set(sum, hash.has(sum) ? hash.get(sum) + 1 : 1);
  });

  function helper(number) {
    return (number * (number - 1)) / 2;
  }

  const mode = 10 ** 9 + 7;

  return [...hash.values()].reduce(
    (prev, curr) => (curr === 1 ? prev : (prev + helper(curr)) % mode),
    0
  );
};
