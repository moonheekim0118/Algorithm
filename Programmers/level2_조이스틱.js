function solution(name) {
  var answer = 0;
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const letterSize = letters.length;
  const size = name.length;
  let result = "A".repeat(size).split("");
  let index = 0;
  const visited = new Array(size).fill(false);

  function getNearestOne(now) {
    const indexList = [];
    name.split("").map((v, i) => {
      if (v !== "A" && !visited[i]) indexList.push(i);
    });
    let nearestLength = 21;
    let nearestIndex = -1;
    for (let index of indexList) {
      let reverse = index > now ? size - index + now : now - index;
      let staright = index > now ? index - now : size - now + index;
      let min = Math.min(reverse, staright);
      if (nearestLength > min) {
        nearestLength = min;
        nearestIndex = index;
      }
    }
    if (nearestLength < 21) {
      answer += nearestLength;
    }
    return nearestIndex;
  }

  while (true) {
    visited[index] = true;
    if (name[index] !== "A") {
      const targetIndex = letters.indexOf(name[index]);
      const reverse = letterSize - targetIndex;
      answer += reverse < targetIndex ? reverse : targetIndex;
      result[index] = name[index];
    }
    if (result.join("") === name) break;
    const next = getNearestOne(index);
    if (next === -1) break;
    index = next;
  }
  return answer;
}

console.log(solution("JAN"));

// node level2_조이스틱
