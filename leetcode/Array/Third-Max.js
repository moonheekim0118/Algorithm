/**
 * @param {number[]} nums
 * @return {number}
 */
 var thirdMax = function(nums) {
     let prev;
     nums=nums.sort((a,b)=>a-b).filter((v,i)=>{
         prev = nums[i-1];
         return v!==prev;
     });
     const length = nums.length;
     if(length < 3 ) return nums[length-1];
     else return nums[length-3]
};

thirdMax([2,2,3,1]);