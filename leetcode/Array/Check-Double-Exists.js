/**
 * @param {number[]} arr
 * @return {boolean}
 */

// dobule 의 결과가 자신과 같은 경우도 있다오!! 예를들면 0 
 var checkIfExist = function(arr) {

    for(let i = 0, len = arr.length ;i <len; i++){
        const double = arr[i]*2;
        const idx = arr.findIndex((v)=>v===double);
        if(idx!==-1 && idx!==i) return true;
    }
     return false;
};

checkIfExist([-2,0,10,-19,4,6,-8]);