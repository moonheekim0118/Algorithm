/**
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities = function (tiles) {
  const maxLen = tiles.length;
  const arr = tiles.split("");
  const combinationList = new Set();
  const visited = new Array(maxLen).fill(false);
  let answer = 0;
  function getCombination(n, c, tmp) {
    if (n === c) {
      combinationList.add(tmp.join(""));
      return;
    }
    for (let i = 0; i < maxLen; i++) {
      if (visited[i]) continue;
      tmp.push(arr[i]);
      visited[i] = true;
      getCombination(n, c + 1, tmp);
      tmp.pop();
      visited[i] = false;
    }
  }
  for (let i = 1; i <= maxLen; i++) {
    getCombination(i, 0, []);
    visited.fill(false);
  }
  return combinationList.size;
};

console.log(numTilePossibilities("AAB"));
