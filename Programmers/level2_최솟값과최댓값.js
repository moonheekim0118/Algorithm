function solution(s) {
    s=s.split(" ").map((v)=>parseInt(v)).sort((a,b)=>a-b);
    var answer = `${s[0]} ${s[s.length-1]}`;
    return answer;
}

console.log(solution("-1 -2 -3 -4"));