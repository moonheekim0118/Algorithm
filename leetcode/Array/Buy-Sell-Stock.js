/**
 * @param {number[]} prices
 * @return {number}
 */

 var maxProfit = function(prices) {
    let sum = 0;
    for(let i = 0, len = prices.length ; i<len-1; i++){
        if(prices[i]<=prices[i+1]){
            sum+=(prices[i+1]-prices[i])
        }
    }
    return sum;
};

console.log(
    maxProfit([7,6,4,3,1]));