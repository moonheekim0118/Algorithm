function solution(arr)
{
    var answer=arr.filter((v,i)=>arr[i+1]!==v);
    return answer;
}

console.log(
    solution([4,4,4,3,3]));