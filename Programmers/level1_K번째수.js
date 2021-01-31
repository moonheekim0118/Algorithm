function solution(array, commands) {
    var answer = [];
    for(let i = 0 , len=commands.length; i< len; i++){
        const subArray=array.slice(commands[i][0]-1, commands[i][1]).sort((a,b)=>a-b);
        answer.push(subArray[commands[i][2]-1]);  
    };
    return answer;
}

console.log(solution([1, 5, 2, 6, 3, 7, 4],[[2, 5, 3], [4, 4, 1], [1, 7, 3],[2,2,1]] ));