
// 2차원 배열에서 x 와 y 의 위치를 통해 구하면 된다.
// 상하좌우로 얼마만큼 가야 닿을 수 있느냐기때문에
// math.abs(x1-x2)+math.abs(y1-y2) 라고 하면 경로의 길이가 나온다.

function solution(numbers, hand) {
    var answer = '';
    const keyPads=[[1,2,3],[4,5,6],[7,8,9],['*',0,'#']];
    const leftKeys=[1,4,7];
    const rightKeys=[3,6,9];
    
    let leftHands={x:3,y:0};
    let rightHands={x:3,y:2};

    const findIndex=(n)=>{
        for(let i = 0, xLen=keyPads.length; i<xLen; i++){
            for(let j = 0, yLen=keyPads[i].length; j<yLen;  j++){
                if(keyPads[i][j]===n){
                    return {x:i, y:j};
                }
            }
        }
    };

    
    for(let i=0, len=numbers.length;i<len;i++){
        const nowIndex=findIndex(numbers[i]);
        if(leftKeys.indexOf(numbers[i])!==-1){ // 왼쪽 
            leftHands=nowIndex;
            answer+='L';
        } else if( rightKeys.indexOf(numbers[i])!==-1){ // 오른쪽 
            rightHands=nowIndex;
            answer+='R';
        } else {
            const fromLeft=Math.abs(nowIndex.x-leftHands.x)+Math.abs(nowIndex.y-leftHands.y);
            const fromRight=Math.abs(nowIndex.x-rightHands.x)+Math.abs(nowIndex.y-rightHands.y);
            if(fromLeft<fromRight){
                leftHands=nowIndex;
                answer+='L'; 
            } else if(fromRight<fromLeft){
                rightHands=nowIndex;
                answer+='R';
            } else {
                if(hand==='left'){
                    leftHands=nowIndex;
                    answer+='L';
                } else{
                    rightHands=nowIndex;
                    answer+='R';
                }
            }
        }        
    }

    return answer;
    
}

console.log(
    solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2],'left'));