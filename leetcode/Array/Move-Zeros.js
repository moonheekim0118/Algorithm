/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {
    const length = nums.length;
    const tempArray = [...nums];
    let writePointerEnd = length-1;
    let writePointerBegin = 0;
    for(let i = 0; i < length ; i++ ){
        if(tempArray[i]===0){
            nums[writePointerEnd--]=0;
        }
        else {
            nums[writePointerBegin++]=tempArray[i];
        }
    }
};

moveZeroes([0]);