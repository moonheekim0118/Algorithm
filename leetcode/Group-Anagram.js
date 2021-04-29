/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const hashMap = new Map();
  for (const str of strs) {
    const key = str.split("").sort().toString();
    if (hashMap.has(key)) {
      const words = hashMap.get(key) || [];
      hashMap.set(key, [...words, str]);
    } else {
      hashMap.set(key, [str]);
    }
  }
  return [...hashMap.values()];
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));

// node Group-Anagram
