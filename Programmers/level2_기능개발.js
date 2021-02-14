function solution(progresses, speeds) {
    let times=progresses.map((v,i)=>{
        const speed=speeds[i]; 
        let days=0;
        while(v<100){
            v+=speed;
            days++;
        }
        return days;
    });
    
    const deploy=[];
    let max=0;
    let idx=-1;
    for(let i = 0, len=times.length; i<len; i++){
        if(times[i]>max){
            max=times[i];
            deploy[++idx]=1;
        } else{
            deploy[idx]++;
        }
    }
    return deploy;
}

solution([93, 30, 55],[1, 30, 5]);