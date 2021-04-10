/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  let say = "1";
  for (let i = 2; i <= n; i++) {
    let newSay = "";
    let cnt = 1;
    let prev = say[0];
    const length = say.length;
    if (length === 1) {
      newSay = `${1}${say[0]}`;
    }
    for (let j = 1; j < length; j++) {
      if (say[j] === prev) {
        cnt++;
      } else {
        newSay += `${cnt}${say[j - 1]}`;
        cnt = 1;
        prev = say[j];
      }
    }
    if (length === 1) {
      newSay = `${1}${say[0]}`;
    } else {
      newSay += `${cnt}${say[length - 1]}`;
    }
    say = newSay;
  }

  return say;
};

console.log(countAndSay(10));
