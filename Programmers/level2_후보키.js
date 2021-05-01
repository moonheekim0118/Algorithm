// node level2_후보키
function solution(relation) {
  let answer = 0;
  const column = relation[0].length;
  const row = relation.length;
  let candidate = new Array(column).fill();

  for (let data of relation) {
    data.map((attr, i) => {
      if (candidate[i]) {
        candidate[i].datas.push(attr);
      } else {
        candidate[i] = { key: i, datas: [attr] };
      }
    });
  }

  // 크기 1 후보키 찾기
  // 크기 1 후보키는 바로 배열에서 빼주도록 함 - 최소성 충족

  const tmp = [];
  for (let i = 0; i < column; i++) {
    if (new Set(candidate[i].datas).size === row) {
      tmp.push(candidate[i].key);
      answer++;
    }
  }

  candidate = candidate.filter((e) => tmp.indexOf(e.key) === -1);

  const selectedKeys = [];

  // 크기 2~n 후보키 찾기
  function combination(n, m, start, tmp) {
    if (n === m) {
      let key = [];
      for (let e of tmp) {
        key.push(+e.key);
      }
      for (let usedKey of selectedKeys) {
        const check = usedKey.filter((k) => key.indexOf(k) === -1);
        if (check.length === 0) return;
      }
      // 후보키 유일성 검사
      let result = new Set();
      for (let i = 0; i < row; i++) {
        let join = "";
        for (let e of tmp) {
          join += " " + e.datas[i];
        }
        result.add(join);
      }

      if (result.size < row) return;
      answer++;
      selectedKeys.push(key);
      return;
    }
    for (let i = start; i < candidate.length; i++) {
      tmp.push(candidate[i]);
      combination(n, m + 1, i + 1, tmp);
      tmp.pop();
    }
  }

  for (let i = 2; i <= column; i++) {
    combination(i, 0, 0, []);
  }

  return answer;
}

console.log(
  solution([
    ["a", 1, "aaa", "c", "ng"],
    ["b", 1, "bbb", "c", "g"],
    ["c", 1, "aaa", "d", "ng"],
    ["d", 2, "bbb", "d", "ng"],
  ])
);
