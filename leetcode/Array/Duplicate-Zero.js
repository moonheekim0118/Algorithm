


 var pushLeft = function(arr,startIndex, endIndex){
     for(let i = endIndex; i>=startIndex; i--){
         arr[i]=arr[i-1];
     }
     return arr;
 };

 /**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
 var duplicateZeros = function(arr) {
    let size = arr.length;
    for(let i = 0; i < size; i++){
        if(arr[i]===0 && i+1<=size-1){
            arr = pushLeft(arr,i+1,size-1);
            arr[i+1]=0;
            i++;
        }
    }
};

duplicateZeros([0,0,0,0,0,0,0]);