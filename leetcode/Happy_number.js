/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  const hash = new Set();
  let num = `${n}`;
  while (num !== "1") {
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
      let integer = +num[i];
      sum += integer * integer;
    }
    num = `${sum}`;
    if (hash.has(num)) return false;
    hash.add(num);
  }
  return num === "1";
};
