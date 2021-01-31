function solution(board, moves) {
    let answer = 0;
    const bucket=[];
    for(let i = 0, len = moves.length ; i< len;  i++){
        let now = moves[i]-1;
        for(let j = 0, boardlen = board[0].length; j < boardlen; j++){
            if(board[j][now]!==0){
                let picked=board[j][now];
                board[j][now]=0;
                if(bucket[bucket.length-1]===picked){
                    answer+=2;
                    bucket.pop();
                } else {
                    bucket.push(picked);
                }
                break;
            }
        }
        
    }
    return answer;
}

console.log(solution([[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]], [1,5,3,5,1,2,1,4]));