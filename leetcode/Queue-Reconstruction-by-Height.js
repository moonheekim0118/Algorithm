/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function (people) {
  const queue = [];
  people.sort((a, b) => a[0] - b[0]); // height 순으로 정렬
  function pick() {
    let picked = 0;
    for (let i = 0; i < people.length; i++) {
      const larger = queue.filter((v) => v[0] >= people[i][0]);
      if (larger === people[i][1]) {
        picked = [...people[i]];
        people.splice(i, 1);
        break;
      }
    }
    return picked;
  }
  while (people.length > 0) {
    queue.push(pick());
  }
  return queue;
};
