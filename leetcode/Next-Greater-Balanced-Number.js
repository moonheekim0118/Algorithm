/**
 * @param {number} n
 * @return {number}
 */
 var nextBeautifulNumber = function(n) {
    let i = n + 1;
    
    function checker(n){
        let set = new Set();
        for(let i = 0 ; i < n.length; i++){
            const curr = n[i];
            if(set.has(curr)) continue;
            let count = 1;
            for(let j = i+1; j < n.length; j++){
                if(n[j]===curr) count++;
            }
            if(count !== +n[i]) return false;
            set.add(curr);
        }
        return true;
    }
    while(true){
        const str = `${i}`;
        if(checker(str)) return i;
        i++;
    }
};