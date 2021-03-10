function solution(s) {
    var answer = [0,0];
    while(s!=='1'){
        answer[0]++;
        s=s.split("").filter((v)=>{
            if(v==='0') answer[1]++;
            return v==='1';
        }).join("");
        s=s.length.toString(2);
    }
    return answer;
}

console.log(solution("110010101001"));