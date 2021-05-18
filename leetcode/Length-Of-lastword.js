/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  s = s.split(" ").filter((v) => v.length >= 1);
  console.log(s);
  const length = s.length;
  if (length === 0) return 0;
  return s[length - 1].length;
};

lengthOfLastWord("a ");

// node Length-Of-lastword
