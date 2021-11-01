/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
 var solve = function(board) {
    const cx = [1,-1,0,0];
    const cy = [0,0,1,-1];
    
    const n = board.length;
    const m = board[0].length;
    const visited = new Set()
    
    
    function dfs(x,y){
        board[x][y]='Z';
        for(let i = 0 ; i < 4 ; i ++){
            const nx = x+cx[i];
            const ny = y+cy[i];
            if(nx === n || ny === m || nx === -1 || ny === -1) continue;
            if(board[nx][ny]==='O') {
                board[nx][ny]='Z';
                dfs(nx,ny);
            }
        }
        
    }
    
    for(let i = 0 ; i < n ; i++){
        if(board[i][0]==='O') dfs(i,0);
        if(board[i][m-1]==='O') dfs(i,m-1);
    }
    
    for(let i = 0 ; i < m ; i ++ ){
        if(board[0][i]==='O') dfs(0,i);
        if(board[n-1][i]==='O') dfs(n-1,i)
    }
    
    for(let i = 0 ; i < n ; i ++ ){
        for(let j = 0 ; j < m ; j ++){
            if(board[i][j]==='Z') board[i][j]='O';
            else if(board[i][j]==='O') board[i][j]='X';
        }
    }
    return board;
    
};