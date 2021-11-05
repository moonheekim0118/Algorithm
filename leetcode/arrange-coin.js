/**
 * @param {number} n
 * @return {number}
 */
 var arrangeCoins = function(n) {
    let stair= 1;
    let ans = 0;
    while(n >= stair){
        n-=stair;
        ans++;
        stair++;
    }
    return ans;
};