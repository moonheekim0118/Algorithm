function solution(n, computers) {
    var answer = 0;
    let checker = new Array(n).fill(false);

    const dfs=(x)=>{
        console.log(x);
        checker[x]=true;
        for(let i = 0 ; i < n ; i++){
            // 아직 방문 안했고, i와 연결된 요소가 있다면..그걸로 dfs돌아서 체크해주기
            if(i!==x && !checker[i] && computers[x][i]===1){
                dfs(i);
            }
        }
    };
    for(let i = 0 ; i < n ; i++){
        // 연결되어있다 == 하나의 네트워크
        // 연결되어있으면 더이상 dfs 안돌게되므로 ..
        if(!checker[i]){
            dfs(i);
            answer++;
        }
    }

    return answer;
}

console.log(
    solution(3, [[1, 1, 0], [1, 1, 1], [0, 1, 1]]));