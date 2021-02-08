function solution(n, arr1, arr2) {
    return arr1.map((v,i)=>{
        let num1=v.toString(2);
        let num2=arr2[i].toString(2);
        while(num1.length<5){
            num1='0'+num1;
        }
        while(num2.length<5){
            num2='0'+num2;
        }
        num1=num1.split("");
        return num2.split("").map((v2,i2)=>{
            if(v2==='1' || num1[i2]==='1') return '#';
            else return ' ';
        }).join("");
    });
}
 
console.log(solution(5,[9, 20, 28, 18, 11],[30, 1, 21, 17, 28]));