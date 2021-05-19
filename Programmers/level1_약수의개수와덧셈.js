function solution(left, right) {
  var answer = 0;
  function factorCnt(num) {
    let cnt = 1;
    for (let i = 2; i <= num; i++) {
      if (num % i == 0) cnt++;
    }
    return cnt;
  }

  for (let i = left; i <= right; i++) {
    const cnt = factorCnt(i);
    if (cnt % 2 === 0) {
      answer += i;
    } else {
      answer -= i;
    }
  }
  return answer;
}
