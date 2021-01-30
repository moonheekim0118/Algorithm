function solution(new_id) {
    let ans ="";
    for(let i =0; i < new_id.length; i++){
        let letter=new_id[i].toLowerCase();
        // 허용되는 문자열 제외 제거 
        if("0123456789abcdefghijklmnopqrstuvwxyz.-_".indexOf(letter)===-1) continue;
        // 연속되는 . 제거
        if(letter==='.' && ans[ans.length-1]==='.' && new_id[i-1]) continue;
        ans+=letter;
    }
    
    // 맨앞에 . 올경우 삭제
    if(ans[0]==='.') ans = ans.slice(1);
    ans = ans.slice(0,15); //15자리 넘을경우 끊어주기
    if(ans[ans.length-1]==='.') ans=ans.slice(0,ans.length-1);
    if(!ans) ans="a";
    while(ans.length <3) ans+=ans[ans.length-1];
    return ans; 

}

console.log(solution("z-+.^."));