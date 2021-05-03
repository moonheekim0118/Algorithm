function solution(s) {
  let answer = 1;
  const size = s.length;

  function finder(left, right) {
    while (left >= 0 && right < size && s[left] === s[right]) {
      left--;
      right++;
    }
    return right - left - 1;
  }
  for (let i = 0; i < size; i++) {
    const result1 = finder(i, i + 1); // 짝수 팔린드롬
    const result2 = finder(i, i); // 홀수 팔린드롬
    answer = Math.max(answer, result1, result2);
  }
  return answer;
}

console.log(solution("a"));

// node level3_가장긴팰린드롬
