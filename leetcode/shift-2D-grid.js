/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
 var shiftGrid = function(grid, k) {
    
    const length = grid.length;
    function shift(){
        const temp = [];
        const last = grid[0].length-1;
        for(let i = 0 ; i < length;i++ ){
            temp.push(grid[i][last]);
        }
        
        for(let i = 0 ; i < length; i++){
            for(let j = last; j > 0 ; j--){
                grid[i][j]=grid[i][j-1];
            }
            let index = i-1;
            if(index===-1) index=length-1;
            grid[i][0]=temp[index];
        }
        
    }
    
    for(let i = 0 ; i < k ; i++) shift();
    return grid;
};