/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
 var dailyTemperatures = function(temperatures) {
    const answer = [];
    const stack = [];
    
    while(temperatures.length){
        let wait = 1;
        const today = temperatures.pop();
        
        while(stack.length && stack[stack.length-1][0]<=today){
            wait+=stack.pop()[1];  
        };
        
        if(stack.length === 0) wait = 0;
        stack.push([today,wait]);
        answer.unshift(wait);
    }
    
    return answer;
};