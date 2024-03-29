/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  const dummyLess = new ListNode();
  const dummyMore = new ListNode();
  let node = head;
  let less = dummyLess;
  let more = dummyMore;
  while (node) {
    if (node.val < x) less = less.next = node;
    else more = more.next = node;
    node = node.next;
  }
  less.next = dummyMore.next;
  more.next = null;
  return dummyLess.next;
};
