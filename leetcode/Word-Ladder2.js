/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function (beginWord, endWord, wordList) {
  const result = [];
  const costMap = new Map();
  let min = Number.MAX_VALUE;

  const queue = [];
  queue.push({ word: beginWord, cost: 1, history: [beginWord] });

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
    const { word, cost, history } = queue.shift();
    if (word === endWord) {
      if (cost <= min) {
        min = cost;
        result.push([...history]);
      }
      continue;
    }

    findEveryAdjWord(word).forEach((target) => {
      const contents = {
        word: target,
        cost: cost + 1,
        history: [...history, target],
      };
      if (!costMap.has(word)) {
        queue.push(contents);
        costMap.set(word, cost + 1);
      } else if (costMap.get(word) >= cost + 1) {
        queue.push(contents);
        costMap.set(word, cost + 1);
      }
    });
  }
  return result.filter((arr) => arr.length !== min + 1);
};
