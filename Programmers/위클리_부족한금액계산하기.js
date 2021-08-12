function solution(price, money, count) {
  let curr = 0;
  while (count > 0) {
    curr += count-- * price;
  }
  let answer = money - curr > 0 ? 0 : curr - money;
  return answer;
}
