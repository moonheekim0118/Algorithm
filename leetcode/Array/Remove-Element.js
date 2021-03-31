/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 var removeElement = function(nums, val) {
     let size = nums.length;
     let newSize = 0;
     for(let i = 0 ; i<size; i++){
         if(nums[i]===val) nums.splice(i,1);
         else newSize++;
     }
     return newSize;
};

removeElement( [0,1,2,2,3,0,4,2],2);