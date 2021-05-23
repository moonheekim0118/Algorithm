/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  const rqs = new Map();
  const edges = new Array(numCourses).fill(0);

  const queue = [];
  for (let i = 0; i < prerequisites.length; i++) {
    const rq = prerequisites[i][0];
    const subject = prerequisites[i][1];
    edges[rq]++;
    if (rqs.has(rq)) {
      rqs.set(rq, [...rqs.get(rq), subject]);
    } else {
      rqs.set(rq, [subject]);
    }
  }

  for (let i = 0; i < numCourses; i++) {
    if (edges[i] === 0) queue.push(i);
  }

  for (let i = 0; i < numCourses; i++) {
    const v = queue.shift();
    if (rqs.has(v)) {
      rqs.get(v).forEach((sub) => {
        edges[sub]--;
        if (edges[sub] === 0) queue.push(sub);
      });
    }
  }
  console.log(edges);
};
