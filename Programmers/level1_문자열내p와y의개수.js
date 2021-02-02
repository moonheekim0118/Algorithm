function solution(s){
    s=s.toLowerCase().split("");
    const p = s.filter((v,i)=>v==='p');
    const y = s.filter((v,i)=>v==='y');
    return p.length===y.length;
}

console.log(solution("Pyy"));