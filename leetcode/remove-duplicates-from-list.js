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
 var deleteDuplicates = function(head) {
    if(!head) return head;
    let prev = head;
    let curr = head.next;
    while(curr){
        if(curr.val === prev.val){
            prev.next = curr.next;
            
        } else {
            prev = curr;
        }
        curr = curr.next;
    }
    return head;
};