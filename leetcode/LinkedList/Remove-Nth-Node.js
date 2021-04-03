function Node(val, next) {
    this.val = (val===undefined ? 0 : val)
   this.next = (next===undefined ? null : next) };


var removeNthFromEnd = function(head, n) {  
    let pointer1 = head;
    let pointer2 = head;
    let prev = null;
    let size = 0;
    while(pointer1 || pointer2){
        if(pointer1===null){
            if(size===n){
             if(prev){
                prev.next= pointer2.next ? pointer2.next : null;
                 
             } else {
                 head= pointer2.next ? pointer2.next : null;
             }
             break;
            }
            size--;
            prev=pointer2;
            pointer2=pointer2.next;
        } else{
            pointer1=pointer1.next;
            size++;
        }
    }
    return head;
};

removeNthFromEnd(node1, 2);