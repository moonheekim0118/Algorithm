function solution(numbers) {    
    numbers.sort((a,b)=>''+a+b>''+b+a ? -1: 1);
    const ans = parseInt(numbers.join("")).toString();
    return ans;
}

console.log(solution(
   [0,0]));
