function oper(operator, num1, num2) {
  if (operator === "+") return num1 + num2;
  else if (operator === "-") return num1 - num2;
  return num1 * num2;
}

function calc(prior, numList, operList) {
  let nums = [...numList];
  let opers = [...operList];
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < opers.length; j++) {
      if (opers[j] === prior[i]) {
        const result = oper(opers[j], nums[j], nums[j + 1]);
        nums[j] = result;
        nums.splice(j + 1, 1);
        opers.splice(j, 1);
        j--;
      }
    }
  }
  return Math.abs(nums[0]);
}

function solution(expression) {
  var answer = 0;
  const nums = [];
  const opers = [];

  let num = "";
  for (let i = 0, len = expression.length; i < len; i++) {
    let word = expression[i];
    if (word !== "-" && word !== "*" && word !== "+") {
      num += word;
    } else {
      nums.push(+num);
      opers.push(word);
      num = "";
    }
  }
  if (num.length > 0) nums.push(+num);
  const priors = [
    ["-", "*", "+"],
    ["-", "+", "*"],
    ["+", "*", "-"],
    ["+", "-", "*"],
    ["*", "-", "+"],
    ["*", "+", "-"],
  ];
  for (let i = 0; i < 6; i++) {
    answer = Math.max(answer, calc(priors[i], nums, opers));
  }
  return answer;
}

console.log(
  solution(
    "177-661*999*99-133+221+334+555-166-144-551-166*166-166*166-133*88*55-11*4+55*888*454*12+11-66+444*99"
  )
);

// "177-661*999*99-133+221+334+555-166-144-551-166*166-166*166-133*88*55-11*4+55*888*454*12+11-66+444*99"
