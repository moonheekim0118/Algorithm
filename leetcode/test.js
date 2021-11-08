function solution(rows, columns) {
    let answer = new Array(rows);
    const record = new Map();
    for(let i = 0 ; i < rows; i++){
        answer[i]=new Array(columns).fill(0);
    }
    let before = 0;
    let r = 0 ;
    let c = 0;
    while(true){
        if(!hasAnyZero()) break;
        console.log(r,c);
        answer[r][c]= ++before;
        const isEven = before % 2 === 0;
        record.set(`${r}:${c}`,isEven);
        console.log(before, isEven);
        if(isEven){  // 짝수 
            r = r===rows-1 ? 0 : r +1;
        }else{ // 홀수 

            c = c===columns-1 ? 0 : c+1;
            console.log(c);
        }

        
        
        const key = `${r}:${c}`;
        if(record.has(key)){
            const past = record.get(key);
            if(past && (before+1)%2===0) break;
            else if(!past && (before+1)%2!==0) break;
        }
    }
    
    function hasAnyZero(){
        for(let i = 0 ; i < rows ;i ++){
            for(let j = 0 ; j< columns ; j++){
                if(answer[i][j]===0) return true;
            }
        }
        return false;
    }
    return answer;
}

solution(3,4);
