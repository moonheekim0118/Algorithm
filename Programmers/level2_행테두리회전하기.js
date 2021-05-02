function solution(rows, columns, queries) {
  var answer = [];
  // 초기화
  const box = new Array(rows);

  for (let i = 0; i < rows; i++) {
    const tmp = [];
    for (let j = 1; j <= columns; j++) {
      tmp.push(i * columns + j);
    }
    box[i] = [...tmp];
  }

  function rotate(x1, y1, x2, y2) {
    // 회전할 직사각형 copy
    // key = 인덱스 , value = 값
    let min = Number.MAX_VALUE;
    const copy = {};
    for (let i = y1; i <= y2; i++) {
      for (let j = x1; j <= x2; j++) {
        if (j === x1 || j === x2 || i === y1 || i === y2) {
          copy[`${j} : ${i}`] = box[j][i];
        }
      }
    }

    // 회전
    for (let i = x1; i <= x2; i++) {
      for (let j = y1; j <= y2; j++) {
        // 직사각형 부분만 회전되도록
        const currentValue = copy[`${i} : ${j}`];
        if (!currentValue) continue;
        let x = i;
        let y = j;
        if (i === x1) {
          // 맨위
          if (j === y2) {
            // 맨위 끝 -> 아래 이동
            x = i + 1;
          } else {
            y = j + 1; // 오른쪽이동
          }
        } else if (i === x2) {
          // 맨 아래
          if (j === y1) {
            // 위로 이동
            x = i - 1;
          } else {
            y = j - 1;
          }
        } else {
          // 가운데
          if (j === y1) {
            // 위로이동
            x = i - 1;
          } else {
            x = i + 1;
          }
        }
        box[x][y] = currentValue;
        min = Math.min(currentValue, min);
      }
    }
    return min;
  }
  for (let q of queries) {
    answer.push(rotate(q[0] - 1, q[1] - 1, q[2] - 1, q[3] - 1));
  }
  return answer;
}

console.log(
  solution(6, 6, [
    [1, 1, 2, 2],
    [1, 1, 2, 2],
  ])
);

// node level2_행테두리회전하기
