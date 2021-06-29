/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  let root = head;
  while (root) {
    helper(root);
    if (!root.next) break;
    root = root.next.next;
  }

  function helper(curr) {
    let tail = curr;
    let before = curr;
    while (tail.next) {
      before = tail;
      tail = tail.next;
    }
    if (curr.next === tail) {
      return;
    }
    tail.next = curr.next;
    curr.next = tail;
    before.next = null;
  }
};
