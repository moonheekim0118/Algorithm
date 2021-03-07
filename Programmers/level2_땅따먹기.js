function getNums(arr, idx){
    arr=arr.filter((_,i)=>i!==idx);
    return arr;
};

function solution(land) {
    const x = land.length;
    if(x===1) {
        return Math.max(...land[0]);
    } 
    for(let i = 1; i< x; i++){
        for(let j = 0; j<4; j++){
            const num = getNums(land[i-1],j);
            const MAX = Math.max(...num);
            land[i][j]+=MAX;
        }
    }
    return Math.max(...land[x-1]);
}

// 다이나믹 프로그래밍
// land[i][j]에 이전 배열으로부터 올 수 있는 최댓값을 넣자 (바로 위에 위치 빼고)
// 그렇게 하다보면 마지막 배열에 가장 큰 값이 들어있음