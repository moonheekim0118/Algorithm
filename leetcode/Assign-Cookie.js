/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */

// 1 child = 1 cookie at most
// if s[j] >= g[i] assign cookie j to i , 
// maximize the number of your content children and output the max number 
var findContentChildren = function(g, s) {
    
    g=g.sort((a,b)=>a-b);
    s=s.sort((a,b)=>a-b);
    
    let ans = 0 ;
  
    for(let i = 0 ; i <g.length; i++){
        while(s.length>0){
            const cookie = s.shift();
            if(cookie >= g[i]) {
                ans++;
                break;
            }
        }
    }
    
    return ans;
};