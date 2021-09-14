
function solution(s){
    let ans = s.length + 1;
    
    let unit = 1;
    
    while(unit <= s.length){
        
        let pattern = `${s.slice(0,unit)}`;
        let result = [[1,pattern]];
        for(let i = unit ; i< s.length; i+=unit){
            if(i+unit >= s.length) {
                const curr = s.slice(i, s.length);
                if(curr === pattern){
                    const prev = result.pop()[0];
                    result.push([prev+1, pattern]);
                } else {
                     result.push([1,s.slice(i,s.length)]);
                }
            }
            else {
                const curr = s.slice(i,unit+i);
                if(curr === pattern) {
                    const prev = result.pop()[0];
                    result.push([prev+1, pattern]);
                    
                } else {
                    pattern = curr;
                    result.push([1,pattern]);
                }
            }
        };
        unit++;
        let count = 0;
        result.forEach(([num, pattern])=>{
            if(num === 1) count += pattern.length;
            else {
                count+= `${num}`.length + pattern.length;
            }
        });
        ans = Math.min(count,ans);
    };
    
    return ans;
};

