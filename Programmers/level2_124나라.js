function solution(n) {
    var answer = '';
    const num=['4','1','2'];
    let remain=0;

    while(n>0){
        remain=n%3;
        n= parseInt(n/3);

        if(remian===0){
            n--;
        }
        answer=num[remian]+answer;
    }
    
    return answer;
}