/**
 * @param {number[][]} edges
 * @return {number[]}
 */
 var findRedundantConnection = function(edges) {
    const n = edges.length;
    let answer = '';
    const root = new Array(n+1);
    for(let i = 1 ; i <= n; i++){
        root[i]=i;
    };
    
    function find(x){
        if(root[x]===x) return x;
        else return find(root[x]);
    }
    
    function union(x,y){
        const nx= find(x);
        const ny= find(y);
        
        if(nx === ny) { 
            answer = [x,y];
        } else {
            root[nx]=ny;
        }
    }
    
    edges.forEach(([x,y])=>{union(x,y)});
    
    return answer;
};