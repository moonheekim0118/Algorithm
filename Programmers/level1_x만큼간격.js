function solution(x, n) {
    var answer = [x];
    for(let i = 1 ; i < n ; i++){
        answer.push(answer[i-1]+x);
    }
    return answer;
}

/**
 * 
 * 
function solution(x, n) {
    return Array(n).fill(x).map((v, i) => (i + 1) * v)
}


 */