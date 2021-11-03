/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
 var distributeCandies = function(candies, num_people) {
    const distribution = new Array(num_people).fill(0);
    
    let c = 1;
    let i = 0 ;
    
    while(candies){
        if(c > candies) c = candies;
        candies-=c;
        distribution[i%num_people]+=c;
        c++;
        i++;
    }
    
    return distribution;
};