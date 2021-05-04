/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const visited = new Map();
  const answer = [];
  let x = 0;
  let y = 0;
  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];
  const rows = matrix.length;
  const cols = matrix[0].length;
  let step = 0;
  function chnageStep() {
    if (step === 3) step = 0;
    else step++;
  }
  visited.set("0:0", true);
  answer.push(matrix[0][0]);
  while (visited.size < rows * cols) {
    let nx = x + dx[step];
    let ny = y + dy[step];
    let key = `${nx}:${ny}`;
    if (visited.has(key) || nx < 0 || nx >= rows || ny < 0 || ny >= cols) {
      chnageStep();
      nx = x + dx[step];
      ny = y + dy[step];
      key = `${nx}:${ny}`;
    }
    x = nx;
    y = ny;
    answer.push(matrix[x][y]);
    visited.set(key, true);
  }
  return answer;
};

console.log(
  spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ])
);
// node Spiral-Matrix
