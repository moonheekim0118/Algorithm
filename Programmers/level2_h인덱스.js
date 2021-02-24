function solution(citations) {
    citations.sort((a,b)=>a-b);
    for(let i = 0 ,len=citations.length; i<len; i++){
        if(len-i <= citations[i]){
            return len-i
        }   
    }
    return 0;
}
console.log(
    solution([3, 0, 6, 1, 5]));

    
// 거꾸로 소팅하면 아래와 같이도 풀 수 있구나
/**
 *    var i = 0;
     while(i + 1 <= citations[i]){
         i++;
     }
     return i;

 */