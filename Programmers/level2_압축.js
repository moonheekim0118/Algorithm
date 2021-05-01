function solution(msg) {
  const answer = [];
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const dictionary = letters.reduce((d, a, i) => ((d[a] = i + 1), d), {});
  for (let i = 0, len = msg.length; i < len; i++) {
    let w = msg[i]; // 현재
    let c = msg[i + 1]; // 다음
    while (dictionary[w + c] && i < len) {
      w = w + c;
      i++;
      c = msg[i + 1];
    }
    answer.push(dictionary[w]);
    letters.push(w + c);
    dictionary[w + c] = letters.length;
  }
  return answer;
}

solution("KAKAO");

//node level2_압축
