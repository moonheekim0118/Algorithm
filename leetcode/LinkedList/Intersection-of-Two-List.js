
var getIntersectionNode = function(headA, headB) {
    if(headA === null || headB === null) return null;
    let aPointer = headA;
    let bPointer = headB;
    while(aPointer){
        if(aPointer===null) return null;
        while(bPointer){
            if(bPointer===aPointer) return bPointer;
            bPointer=bPointer.next;
        }
        aPointer=aPointer.next;
    }
    return aPointer;
};

var getIntersectionNode = function (headA, headB) {
    if (headA == null || headB == null) return null;
    let pointer1 = headA;
    let pointer2 = headB;
    while (pointer1 != pointer2) {
      pointer1 = pointer1.next;
      pointer2 = pointer2.next;
      if (pointer1 === pointer2) return pointer1;
        
      if (pointer1 === null) pointer1 = headB;
      if (pointer2 === null) pointer2 = headA;
    }
    if (pointer1 === pointer2) return pointer1;
      
  };