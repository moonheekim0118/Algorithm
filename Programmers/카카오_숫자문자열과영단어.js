function solution(s) {
    let answer = "";
    const map = { 
     zero: '0',
     one :'1',
     two : '2',
     three : '3',
     four : '4',
     five : '5',
     six : '6',
     seven: '7',
     eight: '8',
     nine: '9'
    };
    let window ="";
    for(let i = 0 ; i < s.length; i++){
        const curr = s[i];
        if(Number.isNaN(+curr)) {
            window+=curr;
        } else {
            answer+=map[window] || "";
            answer+=curr;
            window="";
        }
        if(map[window]) {
            answer+=map[window];
            window="";
        }

    }
    if(window.length > 0) answer+=map[window];
    return +answer;
}