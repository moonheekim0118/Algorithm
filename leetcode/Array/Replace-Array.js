/**
 * @param {number[]} arr
 * @return {number[]}
 */
 var replaceElements = function(arr) {
    let length= arr.length; 
    if(length=== 0 ) return [];
    if(length===1) return [-1];
    let ans = new Array(length), max = -1;
    
    for(let x = length -1 ; x >=0 ; x--){
        ans[x]=max;
        if(max< arr[x]) max = arr[x];
    }
};

console.log(
    replaceElements([17,18,5,4,6,1]));