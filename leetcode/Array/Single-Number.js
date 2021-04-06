/**
 * @param {number[]} nums
 * @return {number}
 */
//  var singleNumber = function(nums) {
//     let length = nums.length;
//     if(length === 1) return nums[0];
//     nums.sort((a,b)=>a-b);
//     for(let i = 0; i< length-1 ; i++){
//         if(i>1 && nums[i-1]!==nums[i] && nums[i]!==nums[i+1]){ return nums[i];  }
//         else if(i===0 && nums[i]!==nums[i+1]) return nums[0];
//     }
//     return nums[length-1];
// };

var singleNumber = function(nums) {
    return nums.reduce((acc, num) => {
        console.log(acc, num, acc ^ num);
        return acc ^ num;
    });
};

console.log(singleNumber([2,1,5,1,2]));