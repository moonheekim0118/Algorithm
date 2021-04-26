/**
 * @param {number} num
 * @return {string}
 */

const roman = {
  1: "I",
  5: "V",
  10: "X",
  50: "L",
  100: "C",
  500: "D",
  1000: "M",
};

var sol = function (num) {
  if (num === 4) {
    return roman[1] + roman[5];
  } else if (num === 40) {
    return roman[10] + roman[50];
  } else if (num === 400) {
    return roman[100] + roman[500];
  } else if (num === 9) {
    return roman[1] + roman[10];
  } else if (num === 90) {
    return roman[10] + roman[100];
  } else if (num === 900) {
    return roman[100] + roman[1000];
  }
  if (roman[num]) {
    return roman[num];
  } else {
    if (num >= 1000) {
      return roman[1000].repeat(num / 1000);
    } else if (num >= 100) {
      if (num > 500) {
        const left = num - 500;
        return roman[500] + roman[100].repeat(left / 100);
      }
      return roman[100].repeat(num / 100);
    } else if (num >= 10) {
      if (num > 50) {
        const left = num - 50;
        return roman[50] + roman[10].repeat(left / 10);
      }
      return roman[10].repeat(num / 10);
    } else {
      if (num > 5) {
        const left = num - 5;
        return roman[5] + roman[1].repeat(left);
      }
      return roman[1].repeat(num);
    }
  }
};

var intToRoman = function (num) {
  let answer = "";
  const numList = [];
  let digit = 1;
  do {
    numList.unshift((num % 10) * digit);
    num = Math.floor(num / 10);
    digit *= 10;
  } while (num > 0);
  numList.map((num) => {
    answer += sol(num);
  });
  return answer;
};

console.log(intToRoman(60));
