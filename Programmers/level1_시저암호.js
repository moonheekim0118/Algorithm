function solution(s, n) {
    let upperCase='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let lowerCase='abcdefghijklmnopqrstuvwxyz';
    const LEN = upperCase.length;
    return s.split("").map(x=>{
        let idx=upperCase.indexOf(x); // 먼저 upperCase에서 index를 받아놓는다.
        if(x===' ') return x;  // 공백이라면 그냥 리턴한다. 
        else if(idx!==-1){ // upperCase에서 찾았으면 == 대문자 
            return upperCase[(idx+n)%LEN]; // 밀어낸 문자를 반환 
        } else { // uppercase index가 -1 이라면 == 소문자 
            idx=lowerCase.indexOf(x);  // 소문자에서 index 찾아내기 
            return lowerCase[(idx+n)%LEN]; // 밀어낸 문자 반환 
        }
    }).join(""); // 다시 스트링으로 만들기 
}

console.log(solution("z b",1));