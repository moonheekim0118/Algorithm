/**
 * @param {character[][]} board
 * @return {boolean}
 */
 var isValidSudoku = function(board) {
     let rowNums =new Set();
     let colNums =new Set();
     for(let i = 0 ; i < 9 ; i++){
         let rowCnt = 0;
         let colCnt = 0;
         for(let j = 0; j< 9; j++){
            if(board[i][j]!=='.'){
                rowCnt++;
                rowNums.add((board[i][j]));
                
            }
            if(board[j][i]!=='.'){
                colCnt++;
                colNums.add(board[j][i]);
            }           
         }
         if(rowCnt === 0 || colCnt ===0  
            || rowCnt !== rowNums.size || colCnt !== colNums.size) return false;
         rowNums.clear();
         colNums.clear();
     }

     for(let i = 0 ; i < 9 ; i +=3){
        for(let j = 0; j< 9; j+=3){
            let cnt = 0;
            for(let k = 0; k <3 ; k++){
                if(board[i+k][j]!=='.'){
                    cnt++;
                    rowNums.add(board[i+k][j]);
                }
                if(board[i+k][j+1]!=='.'){
                    cnt++;
                    rowNums.add(board[i+k][j+1]);
                }
                if(board[i+k][j+2]!=='.'){
                    cnt++;
                    rowNums.add(board[i+k][j+2]);
                }
            }
            if(cnt===0 || cnt !== rowNums.size) return false;
            rowNums.clear();
        }
     }
     return true;
};

isValidSudoku(
    [["8","3",".",".","7",".",".",".","."]
    ,["6",".",".","1","9","5",".",".","."]
    ,[".","9","8",".",".",".",".","6","."]
    ,["8",".",".",".","6",".",".",".","3"]
    ,["4",".",".","8",".","3",".",".","1"]
    ,["7",".",".",".","2",".",".",".","6"]
    ,[".","6",".",".",".",".","2","8","."]
    ,[".",".",".","4","1","9",".",".","5"]
    ,[".",".",".",".","8",".",".","7","9"]]);