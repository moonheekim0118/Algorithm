/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var rotate = function(matrix) {
    const n = matrix.length;
    for(let i = 0; i< n; i ++){
        let row = n-1;
        for(let j = 0; j <n;j++){
            let num = matrix[i].pop();
            matrix[row--].unshift(num);
        }   
    }
};

rotate([[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]);

//[1,2,3],[4,5,6],[7,8,9]