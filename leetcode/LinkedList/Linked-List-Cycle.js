/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

 function ListNode(val) {
     this.val = val;
     this.next = null;
 }

/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var hasCycle = function(head) {
    
    let currentNode = head;
    let records = new Set();
    while(currentNode){
        if(records.has(currentNode)) return true;
        records.add(currentNode);
        currentNode=currentNode.next;
    }
    return false;
};


var hasCycle = function(head) {
    if(!head) return false;

    let slow = head;
    let fast = head.next;
    
    while(slow!==fast){
        if(fast === null || fast.next === null) return false;
        slow = slow.next;
        fast = fast.next.next;
    }

    return true;
};