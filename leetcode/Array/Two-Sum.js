/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    let sum= new Map(); 
    for(let i = 0, len=nums.length ; i<len; i++){
        let diff=target-nums[i];
        if(sum.has(diff)){
            return [sum.get(diff),i];
        };
        sum.set(nums[i],i);

     }
};

console.log(twoSum([3,2,4],6));