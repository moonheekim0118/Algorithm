function solution(nums) {
  const totalLength = nums.length / 2;
  const set = new Set([...nums]);
  console.log(set.size, totalLength);
  if (set.size > totalLength) return totalLength;
  return set.size;
}

solution([3, 1, 2, 3]);

// node level1_폰켓몬
