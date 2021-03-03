function solution(s){
    let idx = 0;
    const length = s.length;
    const stack=[];
    if(s[0]!=='(' || s[length-1]!==')') return false;
    while(idx<length){
        if(s[idx++]==='(') stack.push('(');
        else {
            if(!stack.pop()) return false;
        }
    }
    return stack.length===0;
}

console.log(solution("()))"));