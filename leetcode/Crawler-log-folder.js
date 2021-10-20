/**
 * @param {string[]} logs
 * @return {number}
 */
// main 으로부터 몇계단 떨어져있는지 구하면 된다.
var minOperations = function(logs) {
    let steps = 0;
    logs.forEach((log)=>{
        if(log==="../") {
            if(steps>0) steps-=1;
        }
        else if(log!=="./"){
            steps++;
        }        
    });
    return steps;
};