function solution() {
  const arr = [5, 4, 3, 2, 1];

  function swap(arr, num1, num2) {
    const temp = arr[num1];
    arr[num1] = arr[num2];
    arr[num2] = temp;
  }

  function quickSort(arr, left, right) {
    let pivot, partitionIndex;

    if (left < right) {
      pivot = right;
      partitionIndex = partition(arr, pivot, left, right);
      quickSort(arr, left, partitionIndex - 1);
      quickSort(arr, partitionIndex + 1, right);
    }
    return arr;
  }

  function partition(arr, pivot, left, right) {
    const pivot_value = arr[pivot];
    let partitionIndex = left;
    for (let i = left; i < right; i++) {
      if (arr[i] < pivot_value) {
        swap(arr, i, partitionIndex);
        partitionIndex++;
      }
    }
    swap(arr, right, partitionIndex);
    console.log(arr, partitionIndex, pivot_value);
    return partitionIndex;
  }
  quickSort(arr, 0, arr.length - 1);
  console.log(arr);
}

solution();
