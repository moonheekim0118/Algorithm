/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    for(let i = 0 , len = nums.length; i<len; i++){
        const num1=nums[i];
        for(let j = 0 ; j <len ;j++){
            if(num1+nums[j]===target){
                return [i,j];
            
            }
        }
    }
};

/**
 * const twoSum = function(nums, target) {
    const comp = {};
    for(let i=0; i<nums.length; i++){
        if(comp[nums[i] ]>=0){
            return [ comp[nums[i] ] , i]
        }
        comp[target-nums[i]] = i
    }
};
 */