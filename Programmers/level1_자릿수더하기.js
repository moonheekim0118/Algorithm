function solution(n)
{
    return n.toString().split("").reduce((accumulator,v)=>accumulator+(parseInt(v)),0);
}

console.log(solution(123));