
// 1월 1일의 요일을 넣어주면 알맞는 요일표를 반환
function getDAYS(startDay){
    const DAY=['MON','TUE','WED','THU','FRI','SAT','SUN'];
    const SpecificDays=[];
    const idx=DAY.indexOf(startDay);
    if(idx!==-1){
        for(let i = 0 ; i< 7 ; i++){
            SpecificDays.push(DAY[(idx+i)%7]);
        }
    };
    return SpecificDays;
}

function solution(a, b,startDay='FRI') {
    const DAY=getDAYS(startDay);
    const totalDates=[0,31,29,31,30,31,30,31,31,30,31,30,31]
    .splice(a===1?0:1,a===1?1:a-1).reduce((accumulator, value)=>accumulator+value)+b;

    return DAY[totalDates%7-1===-1?6:totalDates%7-1];
}

console.log(solution(1,6));