/**
 * @param {number[]} A
 * @return {number[]}
 */
 var sortArrayByParity = function(A) {
    let even=[];
    let odd=[];
    for(let nums of A){
        if(nums%2===0) even.push(nums);
        else odd.push(nums);
    }
    return even.concat(odd);
};

console.log(sortArrayByParity([3,1,2,4]));
