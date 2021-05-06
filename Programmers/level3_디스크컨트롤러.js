function solution(jobs) {
  let j = 0; // 작업시간
  let time = 0;
  let sum = 0;
  jobs.sort((a, b) => a[0] - b[0]); // 요청시간별로 소팅
  const queue = [];
  while (j < jobs.length || queue.length !== 0) {
    if (jobs.length > j && time >= jobs[j][0]) {
      queue.push(jobs[j++]);
      queue.sort((a, b) => a[1] - b[1]);
      continue; // 있을 때 까지..!!
    }
    if (queue.length !== 0) {
      time += queue[0][1];
      sum += time - queue[0][0];
      queue.shift();
    } else {
      time = jobs[j][0];
    }
  }

  return Math.floor(sum / jobs.length);
}

console.log(
  solution([
    [0, 3],
    [1, 9],
    [2, 6],
  ])
);

// node level3_디스크컨트롤러
