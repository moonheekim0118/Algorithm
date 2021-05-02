function solution(n, a, b) {
  let winners = Array.from({ length: n }, (_, i) => i + 1);
  let flag = false;
  let cnt = 1;
  function calc() {
    let num = Math.floor(n / cnt);
    const result = [];
    for (let i = 0; i < num - 1; i += 2) {
      const first = winners[i];
      const second = winners[i + 1];
      if ((first === a && second === b) || (second === a && first === b)) {
        flag = true;
        return;
      }
      if (first === a || first === b) result.push(first);
      else if (second === a || second === b) result.push(second);
      else result.push(first);
    }
    return result;
  }

  while (!flag && winners.length > 2) {
    const result = calc();
    if (flag) break;
    cnt++;
    winners = [...result];
  }

  return cnt;
}

console.log(solution(16, 2, 5));

// node level2_예상대진표
