function solution(n) {
  var answer = [];

  function move(from, to) {
    answer.push([from, to]);
  }
  function hanoi(n, from, to, via) {
    if (n === 1) move(from, to);
    else {
      hanoi(n - 1, from, via, to);
      move(from, to);
      hanoi(n - 1, via, to, from);
    }
  }
  hanoi(n, 1, 3, 2);
  return answer;
}
