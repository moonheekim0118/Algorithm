function solution(a, b) {
    const n = Math.abs(a-b)+1;
   return Math.floor((a+b)*n/2);
}

console.log(solution(3,5));