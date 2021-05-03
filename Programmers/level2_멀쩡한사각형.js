function solution(w, h) {
  const res = (function gcd(a, b) {
    if (b === 0) return a;
    return gcd(b, a % b);
  })(w, h);
  return w * h - (w + h) + res;
}

console.log(solution(8, 12));
