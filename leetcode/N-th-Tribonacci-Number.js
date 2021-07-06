/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
  const fib = [];
  fib[0] = 0;
  fib[1] = 1;
  fib[2] = 1;

  for (let i = 0; i <= n - 3; i++) {
    fib[i + 3] = fib[i] + fib[i + 1] + fib[i + 2];
  }
  return fib[n];
};
