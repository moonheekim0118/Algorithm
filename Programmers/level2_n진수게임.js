// node level2_n진수게임

function solution(n, t, m, p) {
  var answer = "";
  const numSize = t * m;
  const numList = [];
  let num = 0;
  while (numList.length < numSize) {
    let parsed = num.toString(n); // n 진수로 바꾼 수
    parsed = parsed.split("");
    numList.push(...parsed);
    num++;
  }
  console.log(numList.length, numSize);
  for (let i = 0; i < numSize; i += m) {
    answer += numList[i + (p - 1)];
  }
  return answer.toUpperCase();
}

console.log(solution(2, 4, 2, 1));
