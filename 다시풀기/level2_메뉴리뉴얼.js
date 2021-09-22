function solution(orders, course) {
    const answer = [];
    const hash = new Map();
    const maxRecord = new Map();
    
    function combination(order, n,tmp,index){
        if(tmp.length === n) {
            const str = tmp.join("");
            const prev = hash.get(str) ? hash.get(str)+1 : 1;
            hash.set(str, prev);
            
            if(!maxRecord.has(n) || 
              maxRecord.get(n) < prev) maxRecord.set(n, prev);
            return;
        };
        for(let i = index ; i < order.length ; i++){
            tmp.push(order[i]);
            combination(order, n, tmp , i+1);
            tmp.pop();
        }
    };
    
    orders.forEach((order)=>{
        order = order.split("").sort().join("");
        course.forEach((number)=>{
            combination(order,number, [], 0);
        });
    });
        
    
    for(const [key,value] of hash){
        if(value > 1 && maxRecord.get(key.length) === value) answer.push(key);
    }
    return answer.sort();
}


// order는 정렬되어 있지 않으므로 정렬 해준다.
// course 숫자 별로 조합을 구한다.  ( 조합이 얼마나 나왔는지 해쉬에 기록해준다. )
// 조합을 구할 때 각 course n 의 최댓값을 기록해준다.

// 마지막에 기록된 해쉬와, 저장된 maxRecord를 비교하며 답에 넣어준다.