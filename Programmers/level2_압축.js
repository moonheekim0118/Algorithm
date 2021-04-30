function solution(msg) {
  var answer = [];
  const LIBRARY = {
    A: 1,
    B: 2,
    C: 3,
    D: 4,
    E: 5,
    F: 6,
    G: 7,
    H: 8,
    I: 9,
    J: 10,
    K: 11,
    L: 12,
    M: 13,
    N: 14,
    O: 15,
    P: 16,
    Q: 17,
    R: 18,
    S: 19,
    T: 20,
    U: 21,
    V: 22,
    W: 23,
    X: 24,
    Y: 25,
    Z: 26,
  };
  let index = 27;
  let sub = "";
  for (let i = 0, len = msg.length; i < len; i++) {
    sub = msg[i];
    let result = LIBRARY[sub];
    let j = i + 1;
    while (result) {
      if (j >= len) break;
      sub += msg[j++];
      result = LIBRARY[sub];
    }
    if (result) answer.push(LIBRARY[sub]);
    else answer.push(LIBRARY[sub.slice(0, -1)]);
    LIBRARY[sub] = index++;
    if (i < len - 1 && !result) {
      i = j - 2;
    } else {
      break;
    }
  }
  return answer;
}

solution("ABABABABABABABAB");

//node level2_압축
