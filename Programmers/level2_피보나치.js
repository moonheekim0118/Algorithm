function solution(n) {
    let fibo=[0,1];
    for(let i=2; i<=n; i++){
        fibo[i]=(fibo[i-1]+fibo[i-2])%1234567;
    }
    return fibo[n];
}


console.log(solution(99999));

//. 숫자 A, B, C가 있다고 하면 (A + B) % C의 값은 ( ( A % C ) + ( B % C) ) % C와 같다