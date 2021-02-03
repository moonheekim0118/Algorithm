function solution(arr) {
    // 배열에서 제일 작은 수 찾아서 지우기
    // 지워서 배열이 비워졌다면 -1을 채워서 넣기
    const idx= arr.indexOf(Math.min(...arr)); // 제일 작은 수의 인덱스를 찾아준다 ~ 
    arr=arr.filter((v,i)=>i!==idx); // 해당 인덱스를 필터해준다~
    return arr.length===0?[-1]:arr;  // 필터링된 array의 길이가 0이라면 -1 반환 아니라면 array 반환 
}

console.log(solution([10]))