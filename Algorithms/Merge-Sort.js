function solution() {
  const arr = [1, 5, 4, 3, 2];

  function mergeSort(arr) {
    const size = arr.length;
    if (size < 2) return arr;
    const mid = Math.floor(size / 2),
      left = arr.slice(0, mid),
      right = arr.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
  }

  function merge(left, right) {
    const left_size = left.length;
    const right_size = right.length;
    let left_index = 0;
    let right_index = 0;
    const result = [];

    while (left_index < left_size && right_index < right_size) {
      if (left[left_index] < right[right_index])
        result.push(left[left_index++]);
      else result.push(right[right_index++]);
    }

    while (left_index < left_size) result.push(left[left_index++]);
    while (right_index < right_size) result.push(right[right_index++]);
    return result;
  }
  console.log(mergeSort(arr));
}

solution();
