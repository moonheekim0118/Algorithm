function solution(scores) {
    let answer = '';
    const studentLength = scores.length;
    const students = new Array(studentLength).fill([]);
    
    for(let i = 0 ; i< studentLength; i++){
        scores[i].forEach((num, index)=>{
            students[index] = [...students[index] , num];
        });
    }
    
    
    for(let i = 0 ; i< studentLength; i++){
        const curr = students[i];
        let studentNumber = studentLength;
        let max = Math.max(...curr);
        let min = Math.min(...curr);
        let isOnlyMax = curr.filter((v)=>v===max).length === 1;
        let isOnlyMin = curr.filter((v)=>v===min).length === 1;
        let sum = curr.reduce((accu,curr,index)=>{
            if(curr === max && index === i && isOnlyMax) {
                studentNumber--;
                return accu+0;
            }
            if(curr === min && index === i && isOnlyMin) {
                studentNumber--;
                return accu+0;
            }
            return accu + curr;
        },0);
        let average = sum/studentNumber;

        if(average >= 90) answer+='A';
        else if(average >= 80) answer +='B';
        else if(average >= 70) answer +='C';
        else if(average >= 50) answer +='D';
        else answer+='F';
    }
    
    return answer;
}