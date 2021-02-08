function solution(dartResult) {
    const ans=[];
    const kind = {'S':1, 'D':2, 'T':3};
    for(let i = 0, len= dartResult.length; i<len; i++){
        let res = dartResult[i];
        const ansLen = ans.length;
        if(res==='*'){
            ans[ansLen-1]*=2;
            ans[ansLen-2]*=2;
        } else if(res==='#'){
            ans[ansLen-1]*=(-1);
        } else {
            let math;
            while(dartResult[++i]!=='S'&&dartResult[i]!=='D'&&dartResult[i]!=='T'){
                res=res+dartResult[i];
            }
            math=dartResult[i];
            ans.push(Math.pow(+res,kind[math]));
        }
    }
    return ans.reduce((accumulator,v)=>accumulator+v,0);
}

console.log(solution('1D2S3T*'));