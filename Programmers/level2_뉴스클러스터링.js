function splitWords(length, fullWords) {
  let words = "";
  let cluster = [];
  for (let i = 0; i < length - 1; i++) {
    words = fullWords.substr(i, 2);
    if (words.match(/[A-Za-z]{2}/)) {
      cluster.push(words);
    }
  }
  return cluster;
}

function solution(str1, str2) {
  var answer = 0;
  let INIT = 65536;
  str1 = str1.toUpperCase();
  str2 = str2.toUpperCase();

  const cluster1 = splitWords(str1.length, str1);
  const cluster2 = splitWords(str2.length, str2);

  let intersection = 0;
  let union = 0;
  const merged = [...new Set([...cluster1, ...cluster2])];

  for (let e of merged) {
    const found1 = cluster1.filter((v) => v === e).length;
    const found2 = cluster2.filter((v) => v === e).length;
    intersection += Math.min(found1, found2);
    union += Math.max(found1, found2);
  }

  console.log(union, intersection);
  if (union === 0) return INIT;
  answer = Math.floor((intersection / union) * INIT);
  return answer;
}

console.log(solution("handshake", "shake hands"));

//node level2_뉴스클러스터링
