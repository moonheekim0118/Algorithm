function solution(s) {
    var answer = s.split(" ").map((v,i)=>{
        if(v.trim().length===0) return v;
        return v[0].toUpperCase()+v.slice(1).toLowerCase()
    }).join(" ");
    return answer;
}

console.log(solution(" 3people unFollowed me"));