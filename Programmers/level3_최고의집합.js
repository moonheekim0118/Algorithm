function solution(n, s) {
  const answer = [];
  if (n < s) {
    answer.push(-1);
    return answer;
  }
  let quo = s / n;
  let rem = s % n;
  let num = 0;

  if (s % n !== 0) num = 1;
  for (let i = 0; i < n; i++) {
    if (i >= n - rem) answer.push(quo + 1);
    else answer.push(quo);
  }
  return answer;
}
