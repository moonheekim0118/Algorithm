function solution(priorities, location) {
    // 객체화 시켜서 location 저장 
    let printer = priorities.map((v,i)=>{
        return {'p':v,'index':i};
    });

    let cnt = 0 ;
    while(printer.length > 0){
        let first = printer.shift();
        let flag = true;
        for(let  i = 0, len = printer.length; i<len; i++){
            if(printer[i].p>first.p){
                flag=false;
                printer.push(first);
                break;
            }
        }
        if(flag){
            cnt++;
            if(first.index === location){
                return cnt;
            }
        }
    }
}

console.log(solution([1, 1, 9, 1, 1, 1],0));

/**
 * 
 function solution(priorities, location) {
    var arr = priorities.map((priority, index) => {
        return {
            index: index, priority: priority
        };
    });

    var queue = [];

    while(arr.length > 0) {
        var firstEle = arr.shift();
        var hasHighPriority = arr.some(ele => ele.priority > firstEle.priority);
        if (hasHighPriority) {
            arr.push(firstEle);
        } else {
            queue.push(firstEle);
        }
    }

    return queue.findIndex(queueEle => queueEle.index === location) + 1;
}


 * 
 */