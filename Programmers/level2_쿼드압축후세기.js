function solution(arr) {
    let S = arr.length;
    const Squared = S*S;

    // 현재 들어온 정사각형이 같은 수로 이루어져있는지 판단 
    let cnt = 0; 
    let num = arr[0][0];
    let opposite= num === 1 ? 0 : 1;
    let flag = true;
    for(let i = 0; i< S; i++){
        const notHave = arr[i].findIndex((v)=>v===opposite);
        if(notHave!==-1){
            flag=false;
            break;
        }
    }
    if(flag && num === 0 ) { // 0 으로 이루어짐
        return [1,0];
    } else if(flag && num===1){ // 1로 이루어짐 
        return [0,1];
    }
    let answer = [0,0];
    let split = Squared / 4; // 4로 나누기 
    let Sroot = Math.sqrt(split); // 인덱스 크기 


    let start1=0;
    let end1 = Sroot;
    let start2=end1;
    let end2=start2+Sroot;
    let colIdx = start1;

    for(let i = 0 ; i< 2 ; i++){
        const quad1=[];
        const quad2=[];
        for(let i = colIdx; i< colIdx+Sroot;i++){
           quad1.push(arr[i].slice(start1,end1));
           quad2.push(arr[i].slice(start2,end2));
        }
        let ans1= solution(quad1);
        let ans2 = solution(quad2);
        answer[0]+=ans1[0]+ans2[0];
        answer[1]+=ans1[1]+ans2[1];
        colIdx=start2;
    }
    return answer;
}

console.log(solution([[1,1,0,0],[1,0,0,0],[1,0,0,1],[1,1,1,1]]));