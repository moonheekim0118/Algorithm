function solution(s) {
    return s.split(" ").map((v)=>v.split("").map((x,i)=>{
        if(i%2==0) return x.toUpperCase();
        else return x.toLowerCase();
    }).join("")).join(" ");
}

// 첫번째 split으로 문자 사이의 공백을 없애주고 문자열만 남은 배열을 만들어준다. 공백도 포함된다.
// 예를들어 ['try', ' ', 'hello', ' ', 'world'];
// 두번째 split으로 각각의 문자를 배열로 만들어준다 예를들어 ['t','r','y']
// 두번째로 만들어진 split에서 map을 돌려서 각각의 문자의 index를 확인한후 대/소문자로 변환된 문자를 반환한다. 
// ['T','r','Y'] 이렇게 반환된 문자를 다시 join하여 ['Try'] 로 바꾸어준다.
// 이렇게 합쳐진 문자열을 공백과 함께 다시 join으로 합쳐준다 ==> 'TrY HeLlO WoRlD'

console.log(solution('try  hello world'));