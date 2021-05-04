/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */

var insert = function (intervals, newInterval) {
  let first = newInterval[0];
  let last = newInterval[1];

  if (intervals.length === 0) {
    return [newInterval];
  }

  function getUpperBound() {
    let start = 0;
    let end = intervals.length;
    while (start < end) {
      let mid = Math.floor((start + end) / 2);
      if (intervals[mid][1] <= last) {
        start = mid + 1;
      } else {
        end = mid;
      }
    }
    return end;
  }
  let index = getUpperBound();
  if (index < intervals.length && last >= intervals[index][0]) {
    first = Math.min(first, intervals[index][0]);
    last = Math.max(last, intervals[index][1]);
    intervals[index][0] = first;
    intervals[index][1] = last;
  } else if (index <= intervals.length) {
    const tmpIndex = index === intervals.length ? index - 1 : index;
    if (last < intervals[tmpIndex][0]) {
      intervals.splice(tmpIndex, 0, newInterval);
    } else if (first > intervals[tmpIndex][0]) {
      intervals.splice(tmpIndex + 1, 0, newInterval);
    }
  }

  index -= 1;

  while (index >= 0 && intervals[index][1] >= first) {
    first = Math.min(first, intervals[index][0]);
    last = Math.max(last, intervals[index][1]);

    intervals[index][0] = first;
    intervals[index][1] = last;
    intervals.splice(index + 1, 1);
    index--;
  }
  return intervals;
};
