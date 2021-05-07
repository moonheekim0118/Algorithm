function solution(lines) {
  let answer = 1;
  const info = [];
  function parseTime(hour, min, sec) {
    hour = hour * 60 * 60 * 1000;
    min = min * 60 * 1000;
    sec = sec * 1000;
    return hour + min + sec;
  }
  for (let line of lines) {
    line = line.split(" ");
    const timeInfo = line[1].split(":");
    const endTime = parseTime(
      parseInt(timeInfo[0]),
      parseInt(timeInfo[1]),
      parseFloat(timeInfo[2])
    );
    const takendTime = parseFloat(line[2].substring(-1)) * 1000;
    const startTime = endTime - takendTime + 1;
    info.push({ startTime, endTime });
  }
  info.sort((a, b) => a.endTime - b.endTime);
  const size = info.length;
  for (let i = 0; i < size; i++) {
    const sectionStart = info[i].endTime;
    const sectionEnd = sectionStart + 1000;
    let cnt = 0;
    for (let j = 0; j < size; j++) {
      const { endTime, startTime } = info[j];
      if (endTime >= sectionStart && endTime < sectionEnd) {
        cnt++;
      } else if (startTime >= sectionStart && startTime < sectionEnd) {
        cnt++;
      } else if (startTime <= sectionStart && endTime >= sectionStart) {
        cnt++;
      }
    }
    answer = Math.max(answer, cnt);
  }
  return answer;
}

console.log(
  solution([
    "2016-09-15 20:59:57.421 0.351s",
    "2016-09-15 20:59:58.233 1.181s",
    "2016-09-15 20:59:58.299 0.8s",
    "2016-09-15 20:59:58.688 1.041s",
    "2016-09-15 20:59:59.591 1.412s",
    "2016-09-15 21:00:00.464 1.466s",
    "2016-09-15 21:00:00.741 1.581s",
    "2016-09-15 21:00:00.748 2.31s",
    "2016-09-15 21:00:00.966 0.381s",
    "2016-09-15 21:00:02.066 2.62s",
  ])
);

// node level3_추석트래픽
