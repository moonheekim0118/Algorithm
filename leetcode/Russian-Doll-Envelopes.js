/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function (envelopes) {
  const dp = [1];
  const size = envelopes.length;
  envelopes.sort((a, b) => {
    const width = a[0] - b[0];
    if (width === 0) return a[1] - b[1];
    return width;
  });

  for (let i = 1; i < size; i++) {
    const [target_width, target_height] = envelopes[i];
    let max = 0;
    for (let j = 0; j < i; j++) {
      const [width, height] = envelopes[j];
      if (width < target_width && height < target_height) {
        max = Math.max(max, dp[j]);
      }
    }
    dp[i] = max + 1;
  }
  return Math.max(...dp);
};
