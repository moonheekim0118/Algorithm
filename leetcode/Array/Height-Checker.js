/**
 * @param {number[]} heights
 * @return {number}
 */
 var heightChecker = function(heights) {

    let sorted = [...heights].sort((a,b)=>a-b);
    let cnt = 0;
    let length = heights.length;
    for(let i = 0; i < length ; i ++){
        if(heights[i]!==sorted[i]) cnt++;
    }
    return cnt;
 }

console.log(heightChecker( [5,1,2,3,4]));