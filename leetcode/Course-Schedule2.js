/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
  const edges = [];
  const infos = new Map();
  for (let i = 0; i < prerequisites.length; i++) {
    const a = prerequisites[i][0];
    const b = prerequisites[i][1];
    edges[b]++;
    if (infos.has(a)) {
      infos.set(a, [...infos.get(a), b]);
    } else {
      infos.set(a, [b]);
    }
  }

  const queue = [];
  const answers = [];
  for (let i = 0; i < numCourses; i++) {
    if (edges[i] === 0) queue.push(i);
  }

  for (let i = 0; i < numCourses; i++) {
    const vertax = queue.shift();
    answers.push(vertax);
    if (infos.has(vertax)) {
      infos.get(vertax).forEach((v) => {
        edges[v]--;
        if (edges[v] === 0) {
          queue.push(v);
        }
      });
    }
  }
  return answers;
};
