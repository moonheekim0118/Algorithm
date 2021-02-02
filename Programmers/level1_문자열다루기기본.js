function solution(s) {
    const number=s.replace(/\s/g, "a").replace(/e/g,"a");
    return (s.length===4 || s.length===6) && !isNaN(+number) && Number.isInteger(+number);
}

// 간과한 것
// 문자열에 'empty space' 가 들어올 수 있다는 것
// 소수점은 5.121 이렇게 되면 pasreInt 할 시 5로 반환된다는 것 
// empty space 포함 6개, empty space 제거 후 4개로 바뀌는 경우에는 false를 반환해야하는데 => 공백을 문자열 a 로 교체
// 지수형식 e 이 들어오면 parse 되었을 때 정수라고 인식함 -> 이를 위해 모든 e 도 문자열 a 로 교체 

console.log(solution("1e2e2"));