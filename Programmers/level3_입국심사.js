function solution(n, times) {
  let left = 0;
  let right = Math.max(...times) * n;
  let mid = 0;
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    let num = times.reduce(
      (prev, current) => prev + Math.floor(mid / current),
      0
    );
    console.log(num, mid, left, right);
    if (num >= n) {
      right = mid - 1;
      console.log("...?");
    } else if (num < n) left = mid + 1;
  }
  return left;
}

console.log(solution(6, [7, 10]));
