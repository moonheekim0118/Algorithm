function solution(str1, str2) {
    const NUM = 65536;

    // 슬라이딩 윈도우 
    function helper(str){
        str=str.toUpperCase(); // 대문자로 변경 
        const result = new Map(); 
        let window = str[0];
        for(let i = 1 ; i <= str.length ; i++ ){
            if(window.length === 2) {
                const prev = result.get(window);
                result.set(window, prev ? prev+1 : 1 );
                window = window.substring(1); // 앞에것 빼주기 
            }
            const curr = str[i]; // 현재 
            if( curr && !curr.match(/[a-z]/i)) { // 현재문자가 특수문자일경우 
                window = ""; // 초기화 
                continue;
            }
            window+=curr; // 현재문자 더해주기 
        }
        return result;
    }
    
    const a = helper(str1);
    const b = helper(str2);
    
    if(a.size === 0 && b.size === 0) return NUM; // 공집합 
    
    let intersection=0;
    let union=0;
    
    // 교집합 구하기 
    for(let [key, value] of a){
        const num = b.get(key)
        if(num){ intersection += num > value ? value : num; }
    };
    
    // 합집합 구하기 
    [...new Set([ ...a.keys(), ...b.keys() ])].forEach((val)=>{
        const aVal = a.get(val);
        const bVal = b.get(val);
        
        if(!aVal) union += bVal;
        else if(!bVal) union += aVal;
        else {
            aVal > bVal ? union += aVal : union+=bVal;
        }
    });

    return Math.floor((intersection/union)*NUM);
}


// 슬라이딩 윈도우
// 교집합 합집합 구하기 
// 합집합 구할 때, 두 Map 의 키값들을 Set 형태 배열에 담아준 후, forEach 문 돌면서,
// 갯수 더해주기 .. . 