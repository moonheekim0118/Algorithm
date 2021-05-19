function solution(nums) {
  var answer = 0;

  function isPrime(num) {
    for (let i = 2; i <= num - 1; i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  function combination(cnt, tmp, start) {
    if (cnt === 3) {
      const sum = tmp.reduce((prev, curr) => prev + curr, 0);
      if (isPrime(sum)) answer++;
      return;
    }
    for (let i = start; i < nums.length; i++) {
      tmp.push(nums[i]);
      combination(cnt + 1, tmp, i + 1);
      tmp.pop();
    }
  }

  combination(0, [], 0);
  return answer;
}
