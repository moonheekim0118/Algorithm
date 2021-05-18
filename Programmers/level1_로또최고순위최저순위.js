function solution(lottos, win_nums) {
  const RANK = {
    6: 1,
    5: 2,
    4: 3,
    3: 4,
    2: 5,
  };
  const filtered = lottos.filter((v) => v !== 0);
  const zeros = lottos.length - filtered.length; // 0의 개수

  const intersections =
    new Set([...filtered, ...win_nums]).size - win_nums.length; // 낙첨 수
  const success = filtered.length - intersections; // 확신의 당첨수
  const max = RANK[success + zeros] || 6;
  const min = RANK[success] || 6;
  return [max, min];
}

console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]));

// node level1_로또최고순위최저순위
