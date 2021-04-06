/**
 * @param {number[]} digits
 * @return {number[]}
 */

var plus = function(digits, index){
    if(index===-1){
        return digits.unshift(1);
    }
    let num = digits[index]+1;
    if(num===10){
        digits[index]=0;
        return plus(digits,index-1);
    } else {
        return digits[index]++;
    }
}

 var plusOne = function(digits) {
    plus(digits, digits.length-1);
    return digits;
};

plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]);