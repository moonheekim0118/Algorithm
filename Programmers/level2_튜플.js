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
    console.log(counter);
    counter.sort((a,b)=>b.cnt-a.cnt);
    counter.forEach((v)=>answer.push(+v.idx));
    console.log(answer);
    return answer;
}
solution("{{20,111},{111}}");