/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    let prev=-1;
    let cnt=0;
    for(let num of nums){
        if(num!==prev){
            prev=num;
            nums[cnt]=num;
            cnt++;
        }
    }
    return cnt;
};

removeDuplicates([0,0,1,1,1,2,2,3,3,4]);