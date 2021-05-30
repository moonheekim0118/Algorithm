/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function (name, typed) {
  let p1 = 0;
  let p2 = 0;
  const nameSize = name.length;
  const typeSize = typed.length;

  while (p1 < nameSize && p2 < typeSize) {
    if (name[p1] === typed[p2]) {
      const curr = name[p1];
      let nameCnt = 1;
      let typeCnt = 1;
      while (p1 + 1 < nameSize && curr === name[p1 + 1]) {
        p1++;
        nameCnt++;
      }
      while (p2 + 1 < typeSize && curr === typed[p2 + 1]) {
        p2++;
        typeCnt++;
      }
      p1++;
      p2++;
      if (nameCnt > typeCnt) return false;
    } else {
      return false;
    }
  }
  if (p2 < typeSize || p1 < nameSize) return false;
  return true;
};
