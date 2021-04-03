/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var detectCycle = function(head) {
    let currentNode = head;
    let records = new Set();
    while(currentNode){
        if(records.has(currentNode)){
            return currentNode;
        }
        records.add(currentNode);
        currentNode=currentNode.next;
    };
    return null;
};
