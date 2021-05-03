/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  let copyed = head;
  while (copyed && copyed.next) {
    const tmp = copyed.next.val;
    copyed.next.val = copyed.val;
    copyed.val = tmp;
    copyed = copyed.next.next;
  }
  return head;
};
// node Swap-Pairs
