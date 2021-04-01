

// 길이가 n 인 서브배열의 합을 저장해놓은 배열을 반환한다
const slidingWindow =function(arr, n){
    let startIndex=0; 
    let results=[];
    let length = arr.length;
    let sum=0;
    for(let i = 0 ; i < length ; i++){
        if(i-startIndex === n ){ // 서브 배열의 길이가 n 이 되었을 경우 
            results.push(sum); // 구해놓은 sum을 push 해주고 
            sum-=arr[startIndex]; // sum에서 이전 서브배열의 맨 앞 요소 값을 삭제한다
            startIndex=i; // startIndex를 바꾸어준다. 
        } else {
            sum+=arr[i]; // 서브배열 크기 더하기 
        }
    }
    return results;
};

slidingWindow([1,1,1,1,1,1,1,1,1,1],2);