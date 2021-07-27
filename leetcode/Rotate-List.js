/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  function rotate() {
    if (!head) return;
    let prev = head.val;
    let curr = head.next;
    while (curr) {
      let temp = curr.val;
      curr.val = prev;
      prev = temp;
      curr = curr.next;
    }
    head.val = prev;
  }

  let size = 0;
  let temp = head;
  while (temp) {
    size++;
    temp = temp.next;
  }
  const count = k % size;
  let i = 0;
  while (i++ < count) rotate();
  return head;
};
