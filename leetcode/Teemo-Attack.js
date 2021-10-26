/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
 var findPoisonedDuration = function(timeSeries, duration) {
    let time = 0;
    let sideEffect = 0;
    
    timeSeries.forEach((t)=>{
        if(sideEffect >= t){
            time+= duration-(sideEffect-t);
        } else {
            time += duration; 
        }
        sideEffect = t+duration;
    })
    
    return time;
};