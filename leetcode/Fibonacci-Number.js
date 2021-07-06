/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  if (n < 1) return n;

  const fib = [];

  fib[0] = 0;
  fib[1] = 1;

  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib[n];
};
