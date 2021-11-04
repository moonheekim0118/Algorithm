/**
 * @param {number[][]} grid1
 * @param {number[][]} grid2
 * @return {number}
 */
 var countSubIslands = function(grid1, grid2) {
    const cx = [1,-1,0,0];
    const cy =[0,0,1,-1];
    const n = grid2.length;
    const m = grid2[0].length;
    let ans = 0;
    
    function dfs(x,y,temp){
        temp.push({x,y});
        grid2[x][y]=-1;
        
        for(let i = 0 ; i < 4 ;i++){
            const nx = x + cx[i];
            const ny = y + cy[i];
            
            if(nx===n || nx < 0 || ny === m || ny < 0) continue;
            if(grid2[nx][ny]!==1) continue;
            dfs(nx,ny,temp);
        }
    }
    
    function compare(list){
        for(let i = 0 ; i < list.length; i++){
            const { x, y } = list[i];
            if(grid1[x][y]!==1) return false;
        }
        return true;
    }
    
    for(let i = 0 ; i < n ; i++){
        for(let j = 0 ; j < m ; j++){
            const list = [];
            if(grid2[i][j]===1) {
                dfs(i,j,list);
                if(compare(list)) ans++;
            }
            
        }
    }
    return ans;
};
