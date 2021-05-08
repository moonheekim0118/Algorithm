function solution(user_id, banned_id) {
  let answer = 0;

  function checker(banned, general) {
    const size = banned.length;
    if (size !== general.length) return false;
    for (let i = 0; i < size; i++) {
      if (banned[i] !== "*" && banned[i] !== general[i]) return false;
    }
    return true;
  }
  const visited = new Array(user_id.length).fill(false);
  const combList = new Set();
  function getCombination(n, cnt, tmp) {
    if (n === cnt) {
      const key = [...tmp].sort((a, b) => a.localeCompare(b)).join("");
      combList.add(key);
      return;
    }

    for (let i = 0; i < user_id.length; i++) {
      if (!checker(banned_id[cnt], user_id[i]) || visited[i]) continue;
      tmp.push(user_id[i]);
      visited[i] = true;
      getCombination(n, cnt + 1, tmp);
      tmp.pop();
      visited[i] = false;
    }
  }
  getCombination(banned_id.length, 0, []);
  return combList.size;
}

console.log(
  solution(
    ["frodo", "fradi", "crodo", "abc123", "frodoc"],
    ["fr*d*", "*rodo", "******", "******"]
  )
);
// node level3_불량사용자
