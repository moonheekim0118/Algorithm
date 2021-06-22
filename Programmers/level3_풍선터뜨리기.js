function solution(a) {
  let answer = 1;
  const n = a.length;
  let left = 0;
  let right = n - 1;
  let left_min = a[left];
  let right_min = a[right];

  while (left < right) {
    if (left_min > right_min) {
      left++;
      if (a[left] < left_min) answer++;
      left_min = Math.min(left_min, a[left]);
    } else {
      right--;
      if (a[right] < right_min) answer++;
      right_min = Math.min(right_min, a[right_min]);
    }
  }
  return answer;
}
