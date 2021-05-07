function solution(n, t, m, timetable) {
  var answer = "";
  // 분 기준으로 파싱
  function timeParser(time) {
    time = time.split(":");
    const hour = parseInt(time[0]) * 60;
    const min = parseInt(time[1]);
    return hour + min;
  }

  timetable = timetable.map((v) => timeParser(v)).sort((a, b) => a - b);

  // 버스가 오는 것 표현
  let time = 9 * 60; // 처음 시간 - > 9시
  for (let i = 1; i <= n; i++) {
    let cnt = 0;
    let tmp = [];
    while (cnt < m) {
      if (timetable.length === 0 || timetable[0] > time) break;
      tmp.push(timetable.shift());
      cnt++;
    }
    console.log(tmp);
    if (i === n) {
      // 콘이 타야할 버스
      if (cnt === m) {
        // 꽉 찼다면
        answer = tmp[cnt - 1] - 1;
      } else {
        answer = time;
      }
    }
    time += t; // 시간 흐름 (다음버스)
  }
  let hour = Math.floor(answer / 60).toString();
  let min = (answer % 60).toString();
  if (hour.length === 1) {
    hour = "0" + hour;
  }
  if (min.length === 1) {
    min = "0" + min;
  }

  return `${hour}:${min}`;
}

console.log(solution(2, 10, 2, ["09:10", "09:09", "08:00"]));

// node level3_셔틀버스
