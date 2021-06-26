/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
  if (wordList.indexOf(endWord) === -1) return 0; // 배열에 없을 경우
  const n = wordList.length;
  const costMap = new Map();
  let min = Number.MAX_VALUE;

  const queue = [];
  queue.push({ word: beginWord, cost: 1 });

  function findEveryAdjWord(target) {
    const list = [];
    wordList.forEach((word) => {
      let diff = 0;
      for (let i = 0; i < word.length; i++) {
        if (word[i] !== target[i]) diff++;
      }
      if (diff === 1) list.push(word);
    });
    return list;
  }

  while (queue.length !== 0) {
    const { word, cost } = queue.shift();
    if (word === endWord) {
      min = Math.min(min, cost);
      continue;
    }
    const list = findEveryAdjWord(word);
    list.forEach((target) => {
      if (!costMap.has(target)) {
        costMap.set(target, cost + 1);
        queue.push({ word: target, cost: cost + 1 });
      } else if (costMap.get(target) >= cost + 1) {
        costMap.set(target, cost + 1);
        queue.push({ word: target, cost: cost + 1 });
      }
    });
  }
  return min === Number.MAX_VALUE ? 0 : min;
};
