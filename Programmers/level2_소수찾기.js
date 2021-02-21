// 순열로 모든 숫자 찾은후, 에라토스테네스의 체로 소수 거르기

const getPermutation =(arr,selectNum)=>{
    const results=[];
    if(selectNum === 1) return arr.map((value)=>[value]);
    arr.forEach((fixed,index,origin)=>{
        const rest =[...origin.slice(0,index),...origin.slice(index+1)];
        const perm = getPermutation(rest,selectNum-1);
        const attached = perm.map((p)=>[fixed,...p]);
        results.push(...attached);
    })
    return results;
};
function solution(numbers) {
    numbers = numbers.split("");
    const len = numbers.length;
    const list =[];
    for(let i = 1 ; i <= len ; i++){
        const result = getPermutation(numbers,i);
        result.forEach((v)=>{
            const num = +v.join("");
            if(!list.includes(num)) list.push(num);
        })
    }
    const max = Math.max(...list);

    const primes=new Array(max+1).fill(true);
    primes[0]=false;
    primes[1]=false;
    for(let i = 2; i*i <= max ;i++){
        if(primes[i]){
            for(let j = i*i ; j<=max ; j+=i){
                primes[j]=false;
            }
        }
    }
    let cnt = 0;
    for(let i = 0 ; i < list.length; i++){
        if(primes[list[i]]) cnt++;
    }
    return cnt;

}

solution(
    "011");