/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */
 var slowestKey = function(releaseTimes, keysPressed) {
    let max = releaseTimes[0];
    let index = 0;
    
    for(let i=1 ; i < releaseTimes.length; i++){
        const duration = releaseTimes[i]-releaseTimes[i-1];
        if(duration === max){
            if(keysPressed[index].localeCompare(keysPressed[i]) < 0){
                index = i;
            }
        }
        else if(duration > max){
            max = duration;
            index = i;
        }
    }
    return keysPressed[index];
                    
    
};