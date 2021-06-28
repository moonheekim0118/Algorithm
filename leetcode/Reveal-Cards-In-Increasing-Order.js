/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function (deck) {
  deck.sort((a, b) => a - b);
  const n = deck.length;
  const newDeck = new Array(n);
  const indexQueue = [];

  for (let i = 0; i < n; i++) {
    indexQueue.push(i);
  }

  deck.forEach((card) => {
    newDeck[indexQueue.shift()] = card;
    if (indexQueue.length !== 0) {
      indexQueue.push(indexQueue.shift());
    }
  });

  return newDeck;
};
