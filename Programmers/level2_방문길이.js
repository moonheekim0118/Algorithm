function pathGenerator(fromX,toX,fromY,toY){
    return `${Math.min(fromX,toX)},${Math.min(fromY,toY)},${Math.max(fromX,toX)}, ${Math.max(fromY,toY)}`;
};

function solution(dirs) {
    const operation = {
        'U':[-1,0],
        'D':[+1,0],
        'R':[0,+1],
        'L':[0,-1]
    };
    let len = 11;
    let x = 5,
        y = 5 ;
    let visit= new Set();
    for(let i = 0 , dirLen = dirs.length; i< dirLen; i++){
        const v = dirs[i];
        const newX = x+operation[v][0];
        const newY = y+operation[v][1];
        if(newX<0 || newX>=len || newY <0 || newY >=len) continue;
        const path=pathGenerator(x,newX,y,newY);
        visit.add(path);
        x = newX;
        y = newY;
    }
    return visit.size;
}

console.log(solution("ULURRDLLU"));