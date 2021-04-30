function solution(record) {
  const ACT = {
    Enter: "Enter",
    Leave: "Leave",
    Change: "Change",
  };
  const DESC = {
    [ACT.Enter]: "님이 들어왔습니다.",
    [ACT.Leave]: "님이 나갔습니다.",
  };

  const userMap = new Map();
  const parsed = [];
  for (const e of record) {
    const splited = e.split(" ");
    const uid = splited[1];
    const act = splited[0];
    if (act === ACT.Change || act === ACT.Enter) {
      userMap.set(uid, splited[2]);
    }
    if (act !== ACT.Change) {
      parsed.push({ act: splited[0], uid });
    }
  }

  return parsed.map((e) => {
    const nickname = userMap.get(e.uid);
    return `${nickname}${DESC[e.act]}`;
  });
}

console.log(
  solution([
    "Enter uid1234 Muzi",
    "Enter uid4567 Prodo",
    "Leave uid1234",
    "Enter uid1234 Prodo",
    "Change uid4567 Ryan",
  ])
);
