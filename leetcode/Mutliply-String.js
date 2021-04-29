/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  let m = num1.length;
  let n = num2.length;

  if (num1[0] === "0" || num2[0] === "0") return "0";

  const arr = new Array(m + n).fill(0);
  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      let index1 = i + j + 1;
      let index2 = index1 - 1;
      let mult = parseInt(num1[i]) * parseInt(num2[j]) + arr[index1];
      let left = Math.floor(mult / 10);
      mult = mult % 10;
      arr[index1] = mult;
      arr[index2] += left;
    }
  }
  let ans = "";
  let start = false;
  for (let num of arr) {
    if (num > 0) start = true;
    if (start) {
      ans += num;
    }
  }
  return ans;
};

console.log(multiply("0", "0"));
