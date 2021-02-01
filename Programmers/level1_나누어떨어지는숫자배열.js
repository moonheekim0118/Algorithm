function solution(arr, divisor) {
    const ans=arr.filter((v,i)=>v%divisor===0).sort((a,b)=>a-b) || [];
    return ans.length?ans:[-1];
}

console.log(solution([5, 9, 7, 10],5));