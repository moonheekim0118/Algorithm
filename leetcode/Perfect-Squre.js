
var numSquares = function(n){
    if(n===0) return 0;
    
    const q = [n];
    const visited = new Set();
    let level = 1;

    while(q.length){
        const size = q.length;
        for(let i = 0 ; i < size ;i ++){
            const curr = q.shift();
            for(let j = 1 ; j ** 2 <= curr ; j++){
                const diff = curr - j ** 2;
                if(diff === 0) return level;
                if(!visited.has(diff)){
                    visited.add(diff);
                    q.push(diff);
                }
            }
        }
        level ++;
    }
    return level;
};