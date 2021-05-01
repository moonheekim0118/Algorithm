function solution(m, n, board) {
  board = board.map((b) => b.split(""));
  let answer = 0;
  function compare(a, b) {
    return a.toLowerCase() === b.toLowerCase();
  }

  let flag = false;
  do {
    flag = false;
    for (let i = 0; i < m - 1; i++) {
      for (let j = 0; j < n - 1; j++) {
        const L1 = board[i][j];
        const R1 = board[i][j + 1];
        const L2 = board[i + 1][j];
        const R2 = board[i + 1][j + 1];

        if (
          L1 !== " " &&
          compare(L1, R1) &&
          compare(L1, L2) &&
          compare(L1, R2)
        ) {
          flag = true;
          if (L1 === L1.toUpperCase()) {
            board[i][j] = L1.toLowerCase();
            answer++;
          }
          if (L2 === L2.toUpperCase()) {
            board[i + 1][j] = L2.toLowerCase();
            answer++;
          }
          if (R1 === R1.toUpperCase()) {
            board[i][j + 1] = R1.toLowerCase();
            answer++;
          }
          if (R2 === R2.toUpperCase()) {
            board[i + 1][j + 1] = R2.toLowerCase();
            answer++;
          }
        }
      }
    }

    if (flag) {
      for (let i = 0; i < n; i++) {
        for (let j = m - 2; j >= 0; j--) {
          for (let k = j; k < m - 1; k++) {
            const picked = board[k + 1][i];
            if (picked === " " || picked === picked.toLowerCase()) {
              board[k + 1][i] = board[k][i];
              board[k][i] = " ";
            } else break;
          }
        }
      }
    }
  } while (flag);

  return answer;
}

console.log(solution(4, 5, ["CCBDE", "AAADE", "AAABF", "CCBBF"]));
// node level2_프렌즈4블록
