/**
 * @param {string} number
 * @return {string}
 */
var reformatNumber = function (number) {
  number = number.replace(/-|\s/g, "");
  let result = "";
  function helper(str) {
    if (str.length === 4) {
      return `${str[0]}${str[1]}-${str[2]}${str[3]}`;
    }
    return str;
  }
  while (number.length > 4) {
    result = number.substring(0, 3) + "-";
  }
  result += helper(number);
  return result;
};

// 숫자를 왼쪽부터 오른쪽까지 길이 3씩 묶어준다.
// 마지막에 남은 4개 이하의 문자는 아래와 같이 처리한다.
// 2와 3 -> 그냥 2, 3으로 무끈다.
// 4 -> 2개씩 나누다.
