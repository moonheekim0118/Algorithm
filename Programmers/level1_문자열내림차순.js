function solution(s) {
    return s.split("").sort((a,b)=>(b.charCodeAt(0)-65)-(a.charCodeAt(0)-65)).join("");
}
console.log(solution('Zbcdefg'));