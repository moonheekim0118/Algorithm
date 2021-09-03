/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
 var matrixReshape = function(mat, r, c) {
    const newMatrix = new Array(r);
    
    
    for(let i = 0 ; i < r ; i ++){
        newMatrix[i]=[];
    };
    

   
    const m = mat.length;
    const n = mat[0].length;
    
    if(m*n !== r*c) return mat;
    const column = Math.floor((m*n)/r);
    
    
    let count = 0;
    let index = 0;
    for(let i = 0 ; i< m ; i++){
        for(let j = 0 ; j < n ; j++){
            if(count > 0 && count %column ===0) index++;
            newMatrix[index].push(mat[i][j]);
            count ++;
        }
    }
    return newMatrix;
};