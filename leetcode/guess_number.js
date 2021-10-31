/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
 var guessNumber = function(n) {

    let high = n;
    let low = 1;
    while(1){
        let num = Math.floor((low+high)/2); 
        const guessResult = guess(num);
        if(guessResult===0) return num;
        else if(guessResult===1){
            low = num +1;
        } else {
            high = num-1;
        }
    }
};








