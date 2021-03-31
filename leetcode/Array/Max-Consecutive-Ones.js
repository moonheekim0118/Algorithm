/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMaxConsecutiveOnes = function(nums) {
    let max = 0;
    let cnt = 0;
    for(let i = 0,len =nums.length; i<=len ; i++){
        if(nums[i]===1){
            cnt++;
        }
        else {
            max=Math.max(max,cnt);
            cnt=0;
        }
    }
    return max;
};

console.log(
    findMaxConsecutiveOnes([1,1,0,1,1,1]));