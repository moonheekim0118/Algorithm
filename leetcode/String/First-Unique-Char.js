/**
 * @param {string} s
 * @return {number}
 */
 var firstUniqChar = function(s) {
    const indexs = new Map();
    const removed = new Map();
    for(let i= 0 ; i < s.length; i++){
        if(indexs.has(s[i])){
            indexs.delete(s[i]);
            removed.set(s[i],0);
        } else if(removed.has(s[i])){
            continue;
        } 
        else {
            indexs.set(s[i],i);
        }
    }

    if(indexs.size===0) return -1;
    return indexs.values().next().value;
};

console.log(firstUniqChar("leetcode"));