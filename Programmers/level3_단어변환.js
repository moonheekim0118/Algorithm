function solution(begin, target, words) {
  let answer = Number.MAX_VALUE;

  function compareTwoWords(word1, word2) {
    const wordLength = word1.length;
    let differ = 0;
    for (let i = 0; i < wordLength; i++) {
      if (word1[i] !== word2[i]) differ++;
    }
    return differ === 1;
  }

  const queue = [];
  const wordsLength = words.length;
  const depths = new Array(wordsLength + 1).fill(0);
  queue.push({ word: begin, index: wordsLength });
  while (queue.length > 0) {
    const pop = queue.pop();
    const newDepth = depths[pop.index] + 1;
    // find Next one
    for (let i = 0; i < wordsLength; i++) {
      if (
        (depths[i] === 0 || newDepth < depths[i]) &&
        compareTwoWords(pop.word, words[i])
      ) {
        depths[i] = newDepth;
        if (words[i] === target) {
          answer = Math.min(answer, newDepth);
          continue;
        }
        queue.push({ word: words[i], index: i });
      }
    }
  }
  if (answer === Number.MAX_VALUE) return 0;
  return answer;
}

console.log(solution("hit", "hhh", ["hhh", "hht"]));

// node level3_단어변환
