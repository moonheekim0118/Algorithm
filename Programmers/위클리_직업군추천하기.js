function solution(table, languages, preference) {
  let answer = "";
  let max = 0;
  const prefScore = new Map();
  languages.forEach((name, index) => {
    prefScore.set(name, preference[index]);
  });

  const score = new Map();
  table.forEach((data) => {
    let detail = data.split(" ");
    const industry = detail[0];
    detail.shift();
    detail = detail.reverse();
    let sum = 0;
    detail.forEach((lan, idx) => {
      if (prefScore.has(lan)) {
        sum += prefScore.get(lan) * (idx + 1);
      }
    });
    if (max < sum) {
      max = sum;
      answer = industry;
    } else if (max === sum) {
      if (answer.localeCompare(industry) > 0) answer = industry;
    }
  });

  return answer;
}
