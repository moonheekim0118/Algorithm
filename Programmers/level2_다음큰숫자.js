/**
 * 
 * @param {number} num 
 */
const getBinary=(num)=>{
    return num.toString(2).split("").reduce((previous, current)=>(+previous)+(+current), 0);
};

function solution(n) {

   const nBinary = getBinary(n);
   let largerNum = n+1;
   while(true){
    if(getBinary(largerNum)===nBinary) return largerNum;
    largerNum++;
   }
}

console.log(solution(78));