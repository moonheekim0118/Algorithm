function solution(info, query) {
  let Map = {};
  const answer = [];
  function combination(arr, score, start) {
    const key = arr.join("");
    const value = Map[key];
    if (value) {
      Map[key].push(score);
    } else {
      Map[key] = [score];
    }

    for (let i = start; i < arr.length; i++) {
      let tmp = [...arr];
      tmp[i] = "-";
      combination(tmp, score, i + 1);
    }
  }

  for (const e of info) {
    const key = e.split(" ");
    const score = Number(key.pop());
    combination(key, score, 0);
  }

  for (const key in Map) {
    Map[key] = Map[key].sort((a, b) => a - b);
  }

  for (const e of query) {
    const splited = e.replace(/ and /g, " ").split(" ");
    const score = Number(splited.pop());
    const key = splited.join("");
    const target = Map[key];
    if (target) {
      let targetSize = target.length;
      let start = 0;
      let end = targetSize - 1;
      while (start < end) {
        let mid = Math.floor((start + end) / 2);
        if (target[mid] >= score) {
          end = mid;
        } else {
          start = mid + 1;
        }
      }
      answer.push(targetSize - start);
    } else {
      answer.push(0);
    }
  }
  return answer;
}
//node level2_순위검색

solution(
  [
    "java backend junior pizza 150",
    "python frontend senior chicken 210",
    "python frontend senior chicken 150",
    "cpp backend senior pizza 260",
    "java backend junior chicken 80",
    "python backend senior chicken 50",
  ],
  [
    "java and backend and junior and pizza 100",
    "python and frontend and senior and chicken 200",
    "cpp and - and senior and pizza 250",
    "- and backend and senior and - 150",
    "- and - and - and chicken 100",
    "- and - and - and - 150",
  ]
);
