/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function (num) {
  const bin = num.toString(2);
  let complement = [];
  for (let i = 0; i < bin.length; i++) {
    if (bin[i] === 0) complement.push("1");
    else complement.push("0");
  }
  console.log(complement.join(""));
};
