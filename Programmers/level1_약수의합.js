function solution(n) {
    var answer = n; 
    for(let i = 0 ; i<n; i++){
        if(n%i===0) answer+=i;
    }
    return answer;
}