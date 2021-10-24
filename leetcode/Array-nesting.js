/**
 * @param {number[]} nums
 * @return {number}
 */
 var arrayNesting = function(nums) {
    let max = 0;
    
    for(let i = 0 ; i < nums.length; i ++){
        let index = nums[i];
        let count = 0;
        while(nums[index]!==-1){
          const temp = nums[index];
          nums[index]=-1;
          index= temp;
          count++;
        }
        max= Math.max(count,max);
        
    };
    return max;
    
};