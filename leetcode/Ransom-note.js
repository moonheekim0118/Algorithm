/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const ransomMap = new Map();
  const magazineMap = new Map();

  for (let i = 0; i < ransomNote.length; i++) {
    ransomMap.set(
      ransomNote[i],
      ransomMap.has(ransomNote[i]) ? ransomMap.get(ransomNote[i]) + 1 : 1
    );
  }

  for (let i = 0; i < magazine.length; i++) {
    magazineMap.set(
      magazine[i],
      magazineMap.has(magazine[i]) ? magazineMap.get(magazine[i]) + 1 : 1
    );
  }

  const entries = [...ransomMap.entries()];

  for (let i = 0; i < entries.length; i++) {
    const key = entries[i][0];
    const count = entries[i][1];
    if (!magazineMap.has(key) || magazineMap.get(key) < count) return false;
  }
  return true;
};
