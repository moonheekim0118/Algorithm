function solution(a, b) {
    return a.reduce((accumulator, value, idx)=>accumulator+value*b[idx],0);
}

console.log(solution([1,2,3,4],[-3,-1,0,2]));