function solution(numbers, target) {
    let answer = 0;
    const length = numbers.length;

    function combination(idx, val){
       if(idx < length) {
           combination(idx+1, val+numbers[idx]);
           combination(idx+1, val-numbers[idx]);
       } else {
           if(val === target) answer ++;
       }
    }
    combination(0,0);
    return answer;
}