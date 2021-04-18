function check(stack) {
  const pair = { "(": ")", "{": "}", "[": "]" };
  const verify = stack.split("").reduce((ac, cv) => {
    if (cv === pair[ac[ac.length - 1]]) {
      ac.pop();
    } else {
      ac.push(cv);
    }
    return ac;
  }, []);
  return verify.length === 0;
}

function solution(s) {
  var answer = 0;
  let length = s.length;
  if (length % 2 !== 0) return 0;
  let cnt = 0;
  while (cnt < length) {
    const last = s[0];
    s = s.substring(1);
    s += last;
    cnt++;
    if (check(s)) answer++;
  }
  return answer;
}

console.log(solution("}]()[{"));
