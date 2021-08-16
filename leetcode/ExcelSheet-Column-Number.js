/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
  const init = 65;
  let sum = 0;
  for (let i = 0; i < columnTitle.length; i++) {
    sum = sum * 26 + (columnTitle[i].charCodeAt(0) - init + 1);
  }

  return sum;
};
