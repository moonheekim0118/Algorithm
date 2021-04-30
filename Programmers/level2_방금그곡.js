// node level2_방금그곡
function solution(m, musicinfos) {
  // # 들어간 것 파싱
  function parseMelody(melody) {
    melody = melody.split("");
    let result = melody
      .map((v, i) => {
        if (melody[i + 1] === "#") {
          if (v === "A") return "a";
          else if (v === "C") return "c";
          else if (v === "D") return "d";
          else if (v === "F") return "f";
          else return "g";
        } else if (v !== "#") return v;
      })
      .join("");
    return result;
  }

  m = parseMelody(m);
  const listenTime = m.length;
  let maxTime = 0;
  let name = "(None)";

  for (const info of musicinfos) {
    const splited = info.split(",");
    const startTime = splited[0].split(":");
    const endTime = splited[1].split(":");

    let startHour = Number(startTime[0]);
    let endHour = Number(endTime[0]);
    let startMin = Number(startTime[1]);
    let endMin = Number(endTime[1]);

    let hour = endHour - startHour;
    let min;
    if (endMin < startMin) {
      hour--;
      min = endMin + 60 - startMin;
    } else {
      min = endMin - startMin;
    }
    const playTime = hour * 60 + min;

    let score = parseMelody(splited[3]);
    let scoreSize = score.length; // 악보 길이
    if (playTime < scoreSize) {
      score = score.substring(0, playTime);
    } else {
      score = score.repeat(Math.ceil(playTime / scoreSize));
    }
    let window = score.substring(0, listenTime);
    for (let i = listenTime; i <= score.length; i++) {
      if (window === m) {
        if (maxTime < playTime) {
          maxTime = playTime;
          name = splited[2];
        }
        break;
      }
      window = window.substring(1);
      window += score[i];
    }
  }

  return name;
}

console.log(solution("BC", ["12:00,12:03,HELLO,ABCDEF"]));
