/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
 var validateStackSequences = function(pushed, popped) {
    const stack= [];
    let i = 0 ;
    pushed.forEach((num)=>{
        stack.push(num);
        
        while(stack.length && stack[stack.length-1]===popped[i]){
            stack.pop();
            i++;
        }
    });
    return stack.length === 0;
};