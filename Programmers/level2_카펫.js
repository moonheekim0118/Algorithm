function solution(brown, yellow) {
    var answer = [];
    let col = 1;
    while(true){  
        const row = Math.ceil(yellow / col);
        const sum = row*2 + col*2 + 4;
        if(sum===brown){
            answer=[row+2, col+2];
            break;
        }
        col++;
    }
    return answer;
}
 
console.log(solution(10,2));