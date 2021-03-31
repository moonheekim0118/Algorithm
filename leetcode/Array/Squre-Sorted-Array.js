/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortedSquares = function(nums) {
     let result = nums.map((v)=>v*v).sort((a,b)=>a-b);
     return result;  
};

console.log(sortedSquares([-4,-1,0,3,10]));