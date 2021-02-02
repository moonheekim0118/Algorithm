function solution(n) {
    var answer = '';
    const pattern ='박수';
    for(let i = 1 ; i<= n; i++){
        answer+=pattern[i%2];
    }
    return answer;
}

// repeat 함수를 이용해서 풀이 가능 !!
//return '수박'.repeat(n/2) + (n%2 === 1 ? '수' : '');

console.log(solution(15))