/**
 * @param {string} s
 * @return {number}
 */

// 맨 앞글자가 white space 이거나 -, + 숫자 여야한다.
// digit 이후에 나온 character는 무시해도 돼

var myAtoi = function (s) {
  const UPPER_LIMIT = 2147483648;
  const LOWER_LIMIT = -2147483648;
  const str = s.split("");
  let mult = 0;
  let num = "";
  let length = str.length;
  for (let i = 0; i < length; i++) {
    const picked = str[i];
    const parsed = parseInt(picked);
    if (num === "") {
      // 숫자 한번도 안나옴
      if (picked === "-" || picked === "+") {
        if (mult !== 0) return 0;
        picked === "-" ? (mult = -1) : (mult = 1);
      } else if (picked === " ") {
        if (mult !== 0) return 0;
        continue;
      } else if (isNaN(parsed)) {
        return 0;
      } else {
        num += picked;
      }
    } else {
      // 숫자가 이미 나옴
      if (!isNaN(parsed)) {
        num += picked;
      } else break;
    }
  }

  if (num === "") return 0;
  if (mult !== 0) {
    num = parseInt(num) * mult;
  }
  if (num > UPPER_LIMIT) num = UPPER_LIMIT;
  else if (num < LOWER_LIMIT) num = LOWER_LIMIT;
  return num;
};

console.log(myAtoi("+"));
