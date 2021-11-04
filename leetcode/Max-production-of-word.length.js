/**
 * @param {string[]} words
 * @return {number}
 */
 var maxProduct = function(words) {
    let ans = 0;
    for(let i = 0 ; i < words.length; i++){
        const pick = new Set(words[i].split(""));
        for(let j = i+1 ; j < words.length; j++){
            const compare = new Set(words[j].split(""));
            
            const shareSet = new Set([...pick,...compare]);
            if(shareSet.size === pick.size+compare.size){
                ans = Math.max(ans,words[i].length * words[j].length);
            }
            
            
        }
    }
    return ans;
};