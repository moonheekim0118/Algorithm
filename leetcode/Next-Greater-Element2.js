/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var nextGreaterElements = function(nums) {
    const map = new Map();
    const stack =[[0,nums[0]]];
    for(let i = 1; i<nums.length; i++){
        const curr = nums[i];
        while(stack.length && stack[stack.length-1][1] < curr){
            map.set(stack.pop()[0], curr);
        }
        stack.push([i,curr]);
    };
    
    while(stack.length){
        const [index, target] = stack.pop();
        let answer = -1;
        for(let j = 0 ; j < index ; j++){
            if(nums[j]>target) { answer=nums[j]; break; }
        }
        map.set(index,answer);
    }
    
    const greater =[];
    for(let i= 0 ; i< nums.length; i++){
        greater.push(map.get(i));
    }
    return greater;
};