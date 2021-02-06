// 하샤드 수 === 정수 x 의 자릿수 합으로 x가 나누어 떨어져야 한다.
function solution(x) {
    return x%(x.toString().split("").reduce((accumulator,value)=>accumulator+(+value),0))===0;
}

console.log(solution(18));