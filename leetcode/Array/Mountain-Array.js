/**
 * @param {number[]} arr
 * @return {boolean}
 */
 var validMountainArray = function(arr) {
    const length = arr.length;
    if(length < 3) return false;
    let inc= false;
    let dec = false;
    let status = 'inc';
    for(let i = 0 ; i < length-1; i++){
        if(arr[i]===arr[i+1]) return false; // 숫자가 같을 경우 마운틴 성립 X 
        if(status === 'dec' && arr[i]<arr[i+1]) return false; // dec 상태인데 올라갈 경우 
        else if (status === 'inc' && arr[i] > arr[i+1]){  // inc 상태인데 내려갈 경우 => dec로 수정 
            status = 'dec';
            dec=true;
        }
        else if(arr[i]<arr[i+1]){
            inc=true;
        }
    }
    return inc && dec;
};

/**
 * 
 * var validMountainArray = function(arr) {
    
    if(arr.length < 3) return false;
    let rise = false;
    let drop = false;
    let i = 1;
    while(arr[i] > arr[i -1]) {
        i++;
        rise = true;
    }
    
    if(arr[i] == arr[i+1]) return false;
    while (arr[i-1] > arr[i]) {
        i++;
        drop = true;
    }
    return rise && drop && i == arr.length;
};
 */


console.log(validMountainArray([3,5,5]));