// 에라토스테네스체 사용
// 마지막에는 filter로 true의 갯수만 구함 
function solution(n) {
    const arr = new Array(n+1).fill(true,2);
    for(let i=2; i<=Math.sqrt(n); i++){
        if(arr[i]){
            for(let j = i*i ; j<=n; j+=i){
                arr[j]=false;
            }
        }
    }

    return arr.filter((v,i)=>v===true).length
}

// 개선점
// 첫번째 for loop를 n의 제곱근만큼만 돌려도 된다!
// 두번째 for loop에서 어차피 i*i로 접근하고 있기 때문이다.
console.log(solution(10));