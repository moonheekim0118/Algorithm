function solution(d, budget) {
    d.sort((a,b)=>a-b);
    let cnt = 0;
    let sum = 0;
    for(let i = 0, len = d.length; i<len; i++){
        cnt ++;
        sum+=d[i];
        if(sum>budget) { count --; break;};
    }
    return cnt;
}
// 어차피 오름차순으로 정렬되어있기 때문에
// sum > budget인 순간 .. 더 이상 더 큰 답은 나올 수가 없다.
// 따라서 바로 count -- 하고 break; 해주는 것 !