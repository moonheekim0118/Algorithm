function solution(s) {
    let answer = s.split(" ").map((v)=>{
        let t = v.toLowerCase().split("");
        if((/[a-zA-Z]/).test(t)){
            t[0]=t[0].toUpperCase(); 
        }       
        return t.join("");
    }).join(" ");
    return answer;
}