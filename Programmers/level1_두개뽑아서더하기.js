
function solution(numbers) {
    var answer = [];
    for(let i = 0; i<numbers.length; i++){
        for(let j = i+1; j<numbers.length;j++){
            const sum = numbers[i]+numbers[j];
            if(!answer.includes(sum)){
                answer.push(numbers[i]+numbers[j]);
            }
        }
    }
    answer.sort(function(a, b){return a-b});
    return answer;
}

console.log(solution([5, 0, 2, 7]));

/*
다른 분 풀이 

function solution(numbers) {
    const temp = []

    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            temp.push(numbers[i] + numbers[j])
        }
    }

    const answer = [...new Set(temp)] 

    return answer.sort((a, b) => a - b)
}
*/