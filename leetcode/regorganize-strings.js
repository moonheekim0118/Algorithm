/**
 * @param {string} s
 * @return {string}
 */
 var reorganizeString = function(s) {
    const hash = new Map();
    const result = [];
    for(let i = 0 ; i < s.length; i++){
        const prev = hash.get(s[i]) || 0;
        hash.set(s[i], prev+1);
    }

    while(result.length < s.length){
        const desc = [...hash.entries()].sort((a,b)=>b[1]-a[1]);
        let flag = false;
        for(let i = 0 ; i < desc.length; i++){
            const [key,val] =desc[i];
            if(result.length > 0 && key === result[result.length-1]) continue;
            else {
                hash.set(key,val-1);
                if(val-1===0) hash.delete(key);
                result.push(key);
                flag= true;
                break;
            }
        }
        if(!flag) return "";
        
    }
    return result.join("");
};