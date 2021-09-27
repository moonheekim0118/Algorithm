function solution(name) {
    
    let size = name.length;

    // 알파벳 자리 세기 
    function upDown(target){
        const targetIndex = LETTERS.indexOf(target);
        const down = 26-targetIndex;
        return targetIndex > down ? down : targetIndex;
    }

    // 다음 인덱스 구하기 
    function leftRight(index){
        let left = 1;
        let right = 1;

        let right_idx = index+1;
        let left_idx = index-1;
        
        // 오른쪽으로 
        while(right_idx!==index){
            if(right_idx === size) right_idx = 0;
            if(name[right_idx]!==init[right_idx]) break;
            right++;
            right_idx++;
        }

        // 왼쪽으로 
        while(left_idx!==index){
            if(left_idx===-1) left_idx = size-1;
            if(name[left_idx]!==init[left_idx]) break;
            left_idx--;
            left++;     
        }
        
        // 더 작은 것 반환 [ 움직인 횟수, 다음 인덱스 ]
        return left < right ? [left, left_idx] : [right, right_idx];

    }
    
    let answer = 0;
    const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    
    let init = [];
    let index = 0;
    for(let i = 0 ; i < size ; i++) init += 'A';
    while(1){
        answer += upDown(name[index]);
        init = init.substring(0, index) + name[index] + init.substring(index+1);
        if(init === name) break;         // 완성되었다면 
        const [count, nextIndex] = leftRight(index);

        answer += count;
        index = nextIndex;
    }

    return answer;
}

console.log(solution('JEROEN'))
console.log(solution("ZAAAZZZZZZZ"));
//node level2_조이스틱


// 놓쳤던 부분 !! 오른쪽으로 증가하는 인덱스도 size 넘어가면 0으로 초기화 한 후, 다시 증가시켜줘야했었음!!
