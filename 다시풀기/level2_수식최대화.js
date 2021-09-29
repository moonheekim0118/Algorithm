function solution(expression) {
    let answer = 0;
    
    const operators = [];
    const numbers = [];
    
    
    let num = '';
    for(let i = 0 ; i < expression.length ; i++){
        const curr = expression[i];
        if(curr ==='-' || curr ==='+' || curr ==='*'){
            numbers.push(+num);
            operators.push(curr);
            num='';
        } else{
            num+=curr;
        }
    }
    numbers.push(+num);
    
    const cases = [ 
        ['-','+','*'],
        ['-','*','+'],
        ['+','-','*'],
        ['+','*','-'],
        ['*','-','+'],
        ['*','+','-']
    ];
    
    const COUNTER = {
        '-' : (num1, num2)=> num1-num2,
        '+' : (num1, num2)=> num1+num2,
        '*' : (num1, num2)=> num1*num2
    };    
    function helper(oper, nums, prior){
        prior.forEach((op)=> {
            for(let i = 0 ; i < oper.length; i++){
                const curr = oper[i];
                if(curr === op) {
                    const result = COUNTER[curr](nums[i], nums[i+1]);
                    nums.splice(i, 2, result); // i 부터 2개의 원소 잘라주고, 결괏값 반환하기 
                    oper.splice(i, 1); // operator 에서 현재 계산한 값 잘라주기 
                    i--; // operator 잘라줬으므로 !! 
                }
            }
        });
       
        return Math.abs(nums[0]);
    }

    cases.forEach((c)=> {
        answer = Math.max(answer, helper([...operators], [...numbers],c));
    })
    
    return answer;
}