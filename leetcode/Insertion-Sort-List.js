var insertionSortList = function (head) {
  let curr = head;
  while (curr) {
    let prev = head;
    while (prev.val < curr.val) {
      prev = prev.next;
    }

    let before = prev;
    let tempValue = curr.val;

    while (before !== curr.next) {
      const nextValue = before.val;
      before.val = tempValue;
      tempValue = nextValue;
      before = before.next;
    }
    curr = curr.next;
  }

  return head;
};
