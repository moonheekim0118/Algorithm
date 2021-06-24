/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function traverseList(list, array) {
  let head = list;
  while (head != null) {
    array.push(head.val);
    head = head.next;
  }
  return array;
}

function createList(array) {
  let list = null;
  for (let i = array.length - 1; i >= 0; i--) {
    list = { val: array[i], next: list };
  }
  return list;
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  let holder = [];
  traverseList(l1, holder);
  traverseList(l2, holder);
  let sortedHolder = holder.sort((a, b) => a - b);
  return createList(sortedHolder);
};
