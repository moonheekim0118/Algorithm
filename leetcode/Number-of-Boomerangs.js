/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function (points) {
  let ans = 0;

  const hash = new Map();

  function getDistance(a, b) {
    const dx = a[0] - b[0];
    const dy = a[1] - b[1];

    return dx * dx + dy * dy;
  }

  points.forEach((curr, index) => {
    for (let i = 0; i < points.length; i++) {
      if (index === i) continue;
      const d = getDistance(curr, points[i]);
      hash.set(d, hash.has(d) ? hash.get(d) + 1 : 1);
    }
    [...hash.values()].forEach((value) => {
      ans += value * (value - 1);
    });
    hash.clear();
  });
  return ans;
};
