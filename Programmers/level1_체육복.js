function solution(n, lost, reserve) {
    var answer = 0;
    // 여분의 체육복 있는 + 도난당한 사람 모두 제외해놓기 
    let filteredLost = lost.filter((v,i)=>reserve.indexOf(v)==-1);
    let filteredReserve = reserve.filter((v,i)=>lost.indexOf(v)==-1);

    for(let stolen of filteredLost){
        const saver = filteredReserve.findIndex(v=>Math.abs(v-stolen)===1);
        // 이전에 for loop로 돌렸던 것을 findIndex와 Math.abs로 바로 찾을 수 있다!
        if(saver!==-1){ // 찾았다면 
            answer++;
            filteredReserve.splice(saver,saver+1); // 빼주기 
        }
    }
    return answer+(n-filteredLost.length);
}


console.log(solution(5,[2, 4],[3]));