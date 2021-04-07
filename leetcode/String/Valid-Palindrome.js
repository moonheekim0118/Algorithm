/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
    s=s.toLowerCase().replace(/[^A-Z0-9]/ig, "");
    let first = 0;
    let last = s.length-1;
    while(first < last){
        if(s[first] !== s[last]) {
            return false;
        }
        first++;
        last--;
    }
    return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));