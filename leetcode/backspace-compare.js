/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var backspaceCompare = function(s, t) {    

    function helper(str){
        const stack = [];
        for(let i = 0 ; i< str.length ;i++){
            const curr = str[i];
            if(curr==='#') stack.pop();
            else stack.push(curr);
        }
        
        return stack.join("");
    }
    
    return helper(s) === helper(t);

    
    
};