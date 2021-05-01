function solution(str1, str2) {
  var answer = 0;
  str1 = str1.toUpperCase();
  str2 = str2.toUpperCase();
  const format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~0-9]/;

  let cluster1 = [];
  let cluster2 = [];
  let words = `${str1[0]}${str1[1]}`;
  for (let i = 1; i < str1.length; i++) {
    if (!format.test(words)) {
      cluster1.push(words);
    }
    words = words.slice(1);
    words += str1[i + 1];
  }
  words = `${str2[0]}${str2[1]}`;
  for (let i = 1; i < str2.length; i++) {
    if (!format.test(words)) {
      cluster2.push(words);
    }
    words = words.slice(1);
    words += str2[i + 1];
  }

  let intersection = 0;
  const cluster1Size = cluster1.length;
  const cluster2Size = cluster2.length;
  const compare = cluster1Size > cluster2Size;
  let checker = compare ? cluster2 : cluster1;
  let target = compare ? cluster1 : cluster2;
  let visited = {};
  for (let value of checker) {
    if (visited[value]) continue;
    const found1 = checker.filter((v) => v === value).length;
    const found2 = target.filter((v) => v === value).length;
    if (found2 !== 0) {
      intersection += Math.min(found1, found2);
    }
    visited[value] = true;
  }
  const union = cluster1Size + cluster2Size - intersection;
  if (intersection === 0 || union === 0) return 65536;
  answer = Math.floor((intersection / union) * 65536);
  return answer;
}

console.log(solution("aa1+aa2", "AAAA12"));

//node level2_뉴스클러스터링
