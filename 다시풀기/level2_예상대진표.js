function solution(n,a,b)
{
    let answer = 0;
    let league =[];
    for(let i = 1 ; i <=n ; i++){
        league.push(i);
    };
    
    while(1){
        answer++;
        const winners=[];
        for(let i = 0 ; i +1  < league.length; i+=2){
            const first = league[i];
            const second = league[i+1];
            if((first===a&&second===b) || (second===a&&first===b)) 
            return answer;
            else if(first===a || first===b) winners.push(first);
            else if(second===a || second ===b ) winners.push(second);
            else winners.push(first);
        }
        league = [...winners];
    }
}