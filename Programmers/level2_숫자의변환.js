function solution(n) {
    let answer = 1;
    for(let i = 1; i<n ;i++){
        let cnt = i;
        for(let j =i+1; j<n; j++){
            cnt+=j;
            if(cnt===n){
                answer++;
                break;
            } else if(cnt>n) break;
        }
    }
    return answer;
}

console.log(solution(15));