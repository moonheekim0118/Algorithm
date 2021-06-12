/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function (num, k) {
  const numLength = num.length;
  k = k.toString();
  n = k.length - 1;
  for (let i = numLength - 1; i >= 0; i--) {
    let sum = num[i];
    if (n >= 0) {
      sum += parseInt(k[n--]);
    }
    if (sum >= 10) {
      num[i] = sum - 10;
      if (i === 0) {
        num.unshift(1);
      } else {
        num[i - 1] += 1;
      }
    } else {
      num[i] = sum;
    }
  }
  while (n >= 0) {
    const insertNumber = parseInt(k[n]);
    if (num.length === k.length - n) {
      let sum = num[0] + insertNumber;
      if (sum >= 10) {
        num[0] = sum - 10;
        num.unshift(1);
      } else {
        num[0] = sum;
      }
    } else {
      num.unshift(insertNumber);
    }
    n--;
  }
  return num;
};
