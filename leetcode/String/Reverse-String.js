/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

 var reverseString = function(s) {
    let first = 0;
    let last = s.length-1;
    while(first<last){
        const temp = s[first];
        s[first]=s[last];
        s[last]=temp;
        last--;
        first++;
    }
};

reverseString(["h","e","l","o"]);