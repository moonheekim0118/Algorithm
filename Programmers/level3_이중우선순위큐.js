function solution(operations) {
  const INSERT = "I";
  const DELETE = "D";
  const priorityQueue = [];
  for (let e of operations) {
    e = e.split(" ");
    const type = e[0];
    const num = parseInt(e[1]);
    if (type === INSERT) {
      priorityQueue.push(num);
      priorityQueue.sort((a, b) => a - b);
    } else if (type === DELETE) {
      if (num === 1) {
        priorityQueue.pop();
      } else {
        priorityQueue.shift();
      }
    }
  }
  const size = priorityQueue.length;
  if (size === 0) return [0, 0];
  return [priorityQueue[priorityQueue.length - 1], priorityQueue[0]];
}

solution(["I 7", "I 5", "I -5", "D -1"]);

// node level3_이중우선순위큐
