/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  const matrix = new Array(n);
  for (let i = 0; i < n; i++) {
    matrix[i] = new Array(n);
  }
  const visited = new Map();
  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];
  let x = 0;
  let y = 0;
  let step = 0;
  function chnageStep() {
    if (step === 3) step = 0;
    else step++;
  }
  visited.set("0:0", true);
  matrix[0][0] = 1;
  let cnt = 2;

  while (cnt <= n * n) {
    let nx = x + dx[step];
    let ny = y + dy[step];
    let key = `${nx}:${ny}`;
    if (visited.has(key) || nx < 0 || nx >= n || ny < 0 || ny >= n) {
      chnageStep();
      nx = x + dx[step];
      ny = y + dy[step];
      key = `${nx}:${ny}`;
    }
    x = nx;
    y = ny;
    matrix[x][y] = cnt;
    cnt++;
    visited.set(key, true);
  }
  return matrix;
};

console.log(generateMatrix(1));
//node Spiral-Matrix2
