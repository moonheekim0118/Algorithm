


function solution(number, k) {
    let stack = [];
    
    for(let i = 0 , len = number.length; i<len; i++){
        
        
        while(stack[stack.length-1]<number[i] && k > 0){
            stack.pop();
            k--;
        }
        stack.push(number[i]);
    };

    stack.splice(stack.length -k, k);

    return stack.join("");
}

solution("4177252841",4);


