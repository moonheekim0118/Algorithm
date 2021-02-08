// 실패율 : 스테이지에 도달했으나 아직 클리어 못한 플레이어 수 
// / 스테이지 에 도달한 플레이어 수 
function solution(N, stages) {
    const ans=[];
    for(let i=0; i<N; i++){
        const succed = stages.filter((v)=>v>i+1).length;
        const fail = stages.filter((v)=>v===i+1).length;
        ans[i]={stage:i+1, rate:fail/succed};
    }
    return ans.sort((a,b)=>b.rate-a.rate).map((v,i)=>v.stage);
}

solution(5,[2, 1, 2, 6, 2, 4, 3, 3],[3,4,2,1,5]);