/**
 * @param {number[]} nums
 * @return {number}
 */
 var findNumbers = function(nums) {
    let cnt = 0;
    for(let num of nums){
        if(num.toString().length%2===0) cnt++;
    }
    return cnt;
};

console.log(findNumbers([555,901,482,1771]));