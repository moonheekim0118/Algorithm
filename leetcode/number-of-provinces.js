/**
 * @param {number[][]} isConnected
 * @return {number}
 */


 var findCircleNum = function(isConnected) {
    const n = isConnected.length;
    const root = new Array(n);
    const set= new Set();
    for(let i = 0 ; i < n ; i++) root[i]=i;
    
    function find(x){
        if(root[x]===x) return x;
        return find(root[x]);
    }
    
    function union(x,y){
        const nx = find(x);
        const ny = find(y);
        root[nx]=ny;   
    }
    
    isConnected.forEach((info,curr)=>{
        info.forEach((city,index)=>{
            if(index!==curr && city===1) union(curr,index);
        })
    })
    
    for(let i = 0 ; i < root.length; i++){
        root[i]=find(root[i]);
    }
    return new Set(root).size;
};