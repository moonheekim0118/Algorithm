
function solution(answers) {

    let students=[
        {},
        {ans:[1,2,3,4,5],score:0},
        {ans:[2,1,2,3,2,4,2,5], score:0},
        {ans:[3,3,1,1,2,2,4,4,5,5], score:0},
    ];

    const FIRST_LEN=students[1].ans.length;
    const SECOND_LEN=students[2].ans.length;
    const THIRD_LEN=students[3].ans.length;

    for(let i = 0, len=answers.length; i< len ; i ++){
        if(answers[i]===students[1].ans[i%FIRST_LEN]) students[1].score++;
        if(answers[i]===students[2].ans[i%SECOND_LEN]) students[2].score++;
        if(answers[i]===students[3].ans[i%THIRD_LEN]) students[3].score++;
    }
    
    const answer=[];
    let max = Math.max(students[1].score, students[2].score, students[3].score);
    for(let i =1 ; i <=3;i++){
        if(students[i].score===max) answer.push(i);
    };

    return answer;
}

console.log(solution([1,3,2,4,2]));