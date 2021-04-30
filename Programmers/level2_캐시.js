function solution(cacheSize, cities) {
  var answer = 0;
  let cache = [];
  for (let city of cities) {
    city = city.toLowerCase();
    const cacheIndex = cache.indexOf(city);
    if (cacheIndex > -1) {
      answer += 1;
      cache.splice(cacheIndex, 1);
      cache.push(city);
    } else {
      answer += 5;
      cache.push(city);
      if (cache.length > cacheSize) {
        cache.shift();
      }
    }
  }

  return answer;
}

console.log(
  solution(3, [
    "Jeju",
    "Pangyo",
    "Seoul",
    "NewYork",
    "LA",
    "Jeju",
    "Pangyo",
    "Seoul",
    "NewYork",
    "LA",
  ])
);
