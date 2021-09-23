function solution(priorities, location) {
    let answer = 0;
    const stack = priorities.map((v,i)=>[v,i]);
    
    let pick = null;
    while(pick!==location&& stack.length){
        const max = [...stack].sort((a,b)=>b[0]-a[0])[0][0];
        while(stack.length){
            if(stack[0][0]===max) {
                pick = stack.shift()[1];
                break;
            } else{
                stack.push(stack.shift());
            }
        }
       answer++;
    }
    return answer;
}

// stack 배열에 인덱스랑 현재 숫자 넣어주기.
// while 루프 돌면서 최댓값 찾기 
// stack 에서 현재 최댓값 나올 때 까지 맨 앞 빼고 맨 앞 뺀거 다시 뒤에 넣기 반복
// 최댓값 나오면 인덱스 Pick 에 저장
// while 루프 횟수 ==> answer 