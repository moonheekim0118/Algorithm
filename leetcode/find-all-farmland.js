/**
 * @param {number[][]} land
 * @return {number[][]}
 */
 var findFarmland = function(land) {
    const answer = [];
    const cx = [1,-1,0,0];
    const cy = [0,0,1,-1];
    const n = land.length;
    const m = land[0].length;
    
    function dfs(x,y,end){
        land[x][y]=-1;
        end.x = Math.max(end.x, x);
        end.y = Math.max(end.y, y);
        
        for(let i = 0 ; i < 4 ; i++){
            const nx = x + cx[i];
            const ny = y + cy[i];
            if(nx === n || ny === m || nx < 0 || ny < 0 ) continue;
            if(land[nx][ny]!==1) continue;
            dfs(nx,ny,end);
        }
    }
    
    for(let i = 0 ; i < n ; i++){
        for(let j = 0 ; j < m ; j++){
            if(land[i][j]===1){
                const end = { x: i, y : j};
                dfs(i,j,end);
                answer.push([i,j,end.x, end.y]);
            }
        }
    }
    return answer;
};