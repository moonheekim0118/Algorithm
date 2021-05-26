/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  const ans = [];
  const n = s.length;
  function combination(left, start, tmp) {
    if (left === 0) {
      ans.push(tmp.join("."));
      return;
    }
    const max = (left - 1) * 3;
    const oneDigitLeft = n - (start + 1);
    const twoDigitLeft = n - (start + 2);
    const threeDigitLeft = n - (start + 3);

    if (
      (oneDigitLeft <= max && oneDigitLeft >= 0) ||
      (left === 1 && start === n - 1)
    ) {
      const oneDigit = s[start];
      tmp.push(oneDigit);
      combination(left - 1, start + 1, tmp);
      tmp.pop();
    }
    if (
      start < n - 1 &&
      ((twoDigitLeft <= max && twoDigitLeft >= 0) ||
        (left === 1 && start === n - 2))
    ) {
      const twoDigit = s.substring(start, start + 2);
      if (twoDigit[0] !== "0") {
        tmp.push(twoDigit);
        combination(left - 1, start + 2, tmp);
        tmp.pop();
      }
    }
    if (
      start < n - 2 &&
      ((threeDigitLeft <= max && threeDigitLeft >= 0) ||
        (left === 1 && start === n - 3))
    ) {
      const threeDigits = s.substring(start, start + 3);
      if (Number(threeDigits) <= 255 && threeDigits[0] !== "0") {
        tmp.push(threeDigits);
        combination(left - 1, start + 3, tmp);
        tmp.pop();
      }
    }
  }
  combination(4, 0, []);
  return ans;
};

restoreIpAddresses("010010");
// node Restore-IP-Adress
