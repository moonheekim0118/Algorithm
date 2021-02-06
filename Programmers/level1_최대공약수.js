// n과 m의 최대공약수와 최소 공배수 구하기
function solution(n, m) {
    var answer = [];
    const gcd=(a,b)=>{
        while(b>0){
            let temp = b;
            b = a % b ;
            a= temp;
        }
        return a; 
    };
    const ans1=gcd(n,m);
    const lcm=(a, b)=>{
        return (a*b)/ans1;
    }
    answer=[ans1,lcm(n,m)];
    return answer;
}