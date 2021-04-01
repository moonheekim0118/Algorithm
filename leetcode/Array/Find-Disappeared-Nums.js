/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var findDisappearedNumbers = function(nums) {
     const n = nums.length;
     const arr = new Array(n).fill(false);
     for(let i = 0; i < n ; i++){
       arr[nums[i]-1]=true;
     }
     const result = [ ];
     for(let i = 0 ; i < n; i++){
         if(!arr[i]) result.push(i+1);
     }
     return result;
};

// using Counter
var findDisappearedNumbers2 = function(nums) {
    const n = nums.length;
    const arr = new Array(n).fill(0);
    const result =[];
    for(let i = 0 ; i < n ; i++){
        arr[nums[i]-1]++;
    }
    for(let i = 0 ; i < n; i ++) {
        if(arr[i]===0) result.push(i+1)
    }
};

// in-place
var findDisappearedNumbers3 = function(nums) {
    const n = nums.length;
    for(let i = 0 ; i < n ;i++){
        // nums에 있는 수들에 -1 씩 곱해준다.
        // abs 해주는 이유는... 아래 연산때문에 마이너스 값이 됐을수도 있으므로
        if(nums[Math.abs(nums[i])-1] > 0) {
            nums[Math.abs(nums[i])-1]*=-1;
        }
    }
    let result = [];
    for(let i = 0; i < n ; i++){
        if(nums[i]>0) result.push(i+1);
    }
    return result;
}


findDisappearedNumbers3([4,3,2,7,8,2,3,1]);