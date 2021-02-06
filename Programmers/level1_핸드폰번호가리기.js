function solution(phone_number) {
    const len = phone_number.length;
    return  phone_number.split("").map((v,i)=>{
        if(len-i>4) return '*';
        else return v;
    }).join("");
}

console.log(solution("027778888"));