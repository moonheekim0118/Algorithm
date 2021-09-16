function solution(s)
{
    const stack =[];
    for(let i = 0 ; i <s.length; i++){
        if(stack.length === 0) stack.push(s[i]);
        else {
            if(stack[stack.length-1]===s[i]) stack.pop();
            else stack.push(s[i]);
        }
    }
    return stack.length === 0 ? 1 : 0;
}

// 원래는 스택에 하나하나 넣어보는 방식으로 풀어봤음
// 그랬더니..시간초과 남!!

// 방법은 스택 이용해서.. 스택의 마지막 요소와 현재 탐색 요소가 같은지
// 확인.. 같다면 stack. pop() , 다르다면 스택에 푸시!!

