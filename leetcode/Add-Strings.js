/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
 var addStrings = function(num1, num2) {
    let answer = "";
    let i = num1.length-1;
    let j = num2.length-1;
    let over = 0 ;
    
    function helper(num){
        let sum = over + num;
        if(sum >= 10) { 
            over = 1;
            sum-=10;
        } else {
            over = 0;
        }
        return sum;
        
    }
    
    while(i>=0 || j>=0){
        if(i<0) {
            answer=`${helper(+num2[j--])}${answer}`;   
        }
        else if(j<0) {
           answer=`${helper(+num1[i--])}${answer}`;   
        }
        else{
           answer=`${helper((+num1[i--]) + (+num2[j--]))}${answer}`;
        }
    }
    return over===1 ? `${over}${answer}` : answer;
    
};