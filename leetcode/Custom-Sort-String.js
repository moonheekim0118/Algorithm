/**
 * @param {string} order
 * @param {string} str
 * @return {string}
 */
var customSortString = function (order, str) {
  const map = new Map();

  for (let i = 0; i < order.length; i++) {
    map.set(order[i], i);
  }

  str = str
    .split("")
    .sort((a, b) => {
      const aOrder = map.has(a) ? map.get(a) : 0;
      const bOrder = map.has(b) ? map.get(b) : 0;
      return aOrder - bOrder;
    })
    .join("");

  return str;
};
