


function solution(board)
{
    let len_x = board.length;
    let len_y = board[0].length;

    let answer = 0;
    if(len_x===1 || len_x === 1) return 1;
    for(let i = 1; i< len_x; i++){
        for(let j = 1; j< len_y; j++){
            if(board[i][j]===1){
                const min = Math.min(board[i-1][j], board[i-1][j-1], board[i][j-1])+1;
                board[i][j]=min;
                answer=Math.max(min,answer);
            }
        }
    }
    return answer*answer;
}

console.log(solution([[0,0,1,1],[1,1,1,1]]));