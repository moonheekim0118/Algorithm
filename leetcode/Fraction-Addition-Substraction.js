/**
 * @param {string} expression
 * @return {string}
 */
 var fractionAddition = function(expression) {
    let temp = '';
    const numbers = [];
    const opers = [];
    let minus_flag = false;
    for(let i = 0; i < expression.length; i++){
        const curr = expression[i];
        if(curr==='/') {
            numbers.push(+temp);
            temp ='';
        } else if(curr==='+' || curr==='-') {
            if(temp.length) {
                let num = numbers.pop();
                if(minus_flag) num*=-1;
                numbers.push([num,+temp]);
            }
            temp="";
            minus_flag=false;
            if(curr==='-') minus_flag = true;
            
        }
        else temp+=curr;
    }
    let num = numbers.pop();
    if(minus_flag) num*=-1;
    numbers.push([num,+temp]);
      
    function gmd(num1,num2){
        while(num2!==0){
            let r = num1%num2;
            num1=num2;
            num2= r;
        }
        return num1;
    }
    
    function gcd(num1,num2){
        let temp, n; 
        if(num1<num2) {
            temp = num1;
            num1=num2;
            num2=temp;
        }
        while(num2!==0){
            n=num1%num2;
            num1=num2;
            num2=n;
        }
        return num1;
    }
    
    function calculator([child1,parent1], [child2,parent2]){
        if(parent1 === 0 || parent2===0 || child1===0 || child2===0){
            if(parent1 === 0 || child1 === 0) return [child2,parent2];
            return [child1, parent1];
        }
        if(Math.abs(parent1)!==Math.abs(parent2)){
            const result = parent1*parent2;
            child1*=Math.floor(result/parent1);
            child2*=Math.floor(result/parent2);
            parent1=parent2=result;
        }
        return [child1+child2, parent1];
    }
    
    function makeIrreducible([child,parent]){
        const result = Math.abs(gcd(child,parent));
        child/=result;
        parent/=result;
        if(child===0 || parent === 0) return [0,1];
        return [child,parent];
    }
    
    const stack = [];
    if(numbers.length === 1) { 
        const result = makeIrreducible(numbers[0]);
        return `${result[0]}/${result[1]}`;
    }
    while(numbers.length){
        let result;
        if(stack.length === 0 ){
            result = calculator(numbers.shift(),numbers.shift());
        } else {
            result = calculator(stack.pop(), numbers.shift());
        }
        stack.push(result);
    }
    const answer = makeIrreducible(stack.pop());
    return `${answer[0]}/${answer[1]}`
  
};