function solution(begin, target, words) {
    let answer = Number.MAX_VALUE;
    const queue = [[begin, 0]];
    const hash = new Map();
    
    function helper(word){
        const list = [];
        words.forEach((w)=> {
            let count = 0;
            for(let i = 0 ; i < w.length ;i++) {
                if(word[i]!==w[i]) count++;
                if(count > 1) break;
            }
            if(count <= 1) list.push(w); 
        });
        return list;
    }
    
    while(queue.length){
        const [word, cost] = queue.shift();
        if(word === target){
            answer = Math.min(cost, answer);
            continue;
        }
        helper(word).forEach((t)=> {
            if(!hash.has(t)){
                hash.set(t, cost+1);
                queue.push([t,cost+1]);
            } else if(hash.get(t) > cost+1) {
                hash.set(t, cost+1);
                queue.push([t,cost+1]);
            }
        })
        
    }
    
    return answer===Number.MAX_VALUE ? 0 : answer;
}