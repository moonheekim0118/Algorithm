/**
 * @param {number[][]} board
 * @return {number}
 */
var slidingPuzzle = function (board) {
  const target = "123450";
  let start = "";
  const n = board.length;
  const m = board[0].length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      start += board[i][j];
    }
  }
  const visited = new Set();
  const queue = [];
  queue.push(start);
  let res = 0;
  const dirs = [
    [1, 3],
    [0, 2, 4],
    [1, 5],
    [0, 4],
    [1, 3, 5],
    [2, 4],
  ];

  function swap(str, index1, index2) {
    let newStr = str.split("");
    let temp = str[index1];
    newStr[index1] = str[index2];
    newStr[index2] = temp;
    return newStr.join("");
  }
  while (queue.length !== 0) {
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const curr = queue.shift();
      if (curr === target) return res;
      let zero = curr.indexOf("0");
      for (let dir of dirs[zero]) {
        let next = swap(curr, zero, dir);
        if (visited.has(next)) continue;
        visited.add(next);
        queue.push(next);
      }
    }
    res++;
  }
  return -1;
};
