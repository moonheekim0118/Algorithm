
// 문자열을 1부터 s.length 개로 잘라야함 
function solution(s) {
    const length = s.length;
    let min=20000;
    let ans='';

    for(let i = length; i >=1; i--){
        let pattern=s.substring(0,i);
        let cnt=1;
        for(let j = i; j<length;j+=i){
            let sub=s.substring(j,j+i);
            if(sub===pattern){
                cnt++;
            } else {
                if(cnt!==1){ ans=ans+cnt+pattern; }
                else { ans=ans+pattern; }
                pattern=sub;
                cnt=1;
            }
        }     
        if(cnt!==1){ans=ans+cnt+pattern}
        else { ans=ans+pattern }
        if(ans.length<min) min=ans.length;   
        ans='';
    }
    return min;
}

solution("abcabcdede");