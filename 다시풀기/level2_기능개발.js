function solution(progresses, speeds) {
    const count = progresses.map((prog,index)=>
                 Math.ceil((100 - prog) /speeds[index]));
    
    const answer =[];

    while(count.length){
        let taken = 1;
        let before = count.shift();
        while(count.length && count[0] <= before) {
            taken++;
            count.shift();
        }
        answer.push(taken);
    }
    return answer;
}