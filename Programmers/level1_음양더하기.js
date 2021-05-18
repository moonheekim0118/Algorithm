function solution(absolutes, signs) {
  return absolutes.reduce(
    (prev, curr, idx) => prev + (signs[idx] ? 1 : -1) * curr,
    0
  );
}
