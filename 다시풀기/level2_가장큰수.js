function solution(numbers) {
    const ans = numbers.sort((a,b)=>{
        const case1 = `${a}${b}`;
        const case2 = `${b}${a}`;
        return (+case2)-(+case1)
    }).map((v)=> `${v}`).join("");
    
    if(+ans === 0) return '0';
    return ans;
}