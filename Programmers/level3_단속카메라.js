function solution(routes) {
  let answer = 1;
  routes.sort((a, b) => a[0] - b[0]);
  let passed = routes[0][1];
  for (let cars of routes) {
    if (passed < cars[0]) {
      answer++;
      passed = cars[1];
    }
    if (passed >= a[1]) passed = cars[1];
  }
  return answer;
}

solution([
  [-20, 15],
  [-14, -5],
  [-18, -13],
  [-5, -3],
]);

// node level3_단속카메라
