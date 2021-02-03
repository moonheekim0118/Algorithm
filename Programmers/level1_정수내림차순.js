function solution(n) {
   const arr =[];
   do{
       arr.push(n%10);
       n = Math.floor(n/10);
   }while(n>0); // 정수로 들어온 값을 배열로 바꾸는 법 !! 
   return +arr.sort((a,b)=>b-a).join(""); // 소팅 -> 스트링으로 만들고 -> 다시 정수로 
}