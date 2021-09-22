function solution(s) {
    s=s.substring(1);
    s=s.substring(s.length-1,-1);
    s=s.split("},{").map((str)=>{
        const result=[];
        let temp = "";
        for(let i = 0 ; i < str.length; i++){
            if(!isNaN(str[i])) temp+=str[i];
            else if(str[i]===",") {
                result.push(+temp);
                temp="";
            }
        }
        result.push(+temp);
        return result;
    }).sort((a,b)=>a.length-b.length);
    

    const answer =[];
    s.forEach((v)=>{
        answer.push(...v);
    })
    
    return [...new Set(answer)];
}

// 여기서는 그냥 단순히 sub string length, 즉 튜플 length 별로 소팅했다.
// 그리고 하나씩 push 해주고 나중에 답안 배열을 Set에 넣어줘서 중복된 요소 제거함 . 

function solution(s) {
    s = s.replace(/[^0-9,^, ]/g, "");
    s=s.split(',');
    const counter=[];
    var answer = [];
    for(let i = 0, len=s.length; i<len ;i++){
        const idx = counter.findIndex((v)=>v.idx===s[i]);
        if(idx!==-1) counter[idx].cnt++;
        else { 
            counter.push({idx:s[i], cnt:1});
        }
    }
    counter.sort((a,b)=>b.cnt-a.cnt);
    counter.forEach((v)=>answer.push(+v.idx));
    return answer;
}

// 이전 방법에서는 제일 많이 나온 것이 앞에가니까 counter 로 해줬구나.
// 이렇게 할 때 ... map 으로 했으면 더 간단했을텐뎅

