/**
 * @param {number[][]} heights
 * @return {number}
 */
 var minimumEffortPath = function(heights) {
    const row = heights.length;
    const col = heights[0].length;
    const diff = new Array(row);
    
    for(let i = 0 ; i < row ; i++){
        diff[i]= new Array(col).fill(-1);
    }
    
    const cx = [1,-1,0,0];
    const cy = [0,0,1,-1];
    
    const queue =[];
    
    queue.push({x:0, y:0});
    
    while(queue.length){
        const { x, y } = queue.shift();
        
        if(x===row-1 && y === col-1)continue;
        
        for(let i = 0 ; i < 4 ; i++){
            const nx = x+cx[i];
            const ny = y+cy[i];
            if(nx === row || nx < 0 || ny === col || ny < 0 ) continue;
            const temp = Math.max(diff[x][y],Math.abs(heights[x][y]-heights[nx][ny]));
            if(diff[nx][ny]===-1 || diff[nx][ny] > temp){
                diff[nx][ny]=temp;
                queue.push({x:nx, y:ny});
            } 
            
        }
        
    }
    
    return diff[row-1][col-1]===-1 ? 0 : diff[row-1][col-1];
};