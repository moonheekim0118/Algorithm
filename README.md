# 👩🏻‍🍳 JavaScript Algorithm's Ingredients





### 🍅 Digits 구하기 

`String 이용  - 약간 느림 but 간단 `

- number를 string으로 바꾸어서 접근하는 방식 
- number로 다시 다루고 싶다면 toInteger 추가해야함

```javascript
number.toString() // 이렇게해서 index로 접근 가능 
```

`Math 이용 - 더 빠름 but 약간 복잡`

- number를 10으로 나누어서 뒷자리부터 떼어내는 방식
- number로 다시 쉽게 다룰 수 있음

```javascript
let arr =[];
let number=155;
do{
    arr.unshift(number%10);
    number=Math.floor(number/10);
}while(number>0)
    // arr=[1,5,5]
```





<br/>

<br/>



### 🍅 진수 변환

- 10진수 -> 16 진수

```javascript
let dec = 123;
let hex = dec.toString(16);
```

- 10진수 -> 2 진수

```javascript
let dec = 123;
let bin = dec.toString(2);
```

- 16진수 -> 10진수

```javascript
let hex = "7b";
let dec = parseInt(hex,16);
```

- 2진수 -> 10진수

```javascript
let bin = "1111011";
let dec = parseInt(bin,2);
```

- 2진수 -> 16진수

```javascript
let bin ="1111011";
let hex = parseInt(bin,2).toString(16);
```



<br/>

<br/>



# 👩🏻‍🍳 JavaScript Algorithm's Recipes



### 🍅 [배열] 투포인터 

배열에 접근해야 할 때 유용하게 쓰인다. 특히나 배열 내부의 요소를 변경해야 할 경우 메모리도 안잡아먹고 아주 유용하게 쓰일 수 있다 

- 1차원 배열에서 서로 다른 두 인덱스를 가리켜 조작을 한다.
- 아래 예시는 배열 nums에 존재하는 0을 모두 제거하여 배열의 맨 뒤로 보내는 문제이다.

```javascript
var moveZeroes = function(nums) {
    let i = 0;
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] !== 0) {
            nums[i] = nums[j]
            i++
        } 
    }
    while (i < nums.length) {
        nums[i] = 0;
        i++
    }
};
```





<br/>

<br/>



### 🍅 [배열] 슬라이딩 윈도우

배열 내부에서 서브 배열에 대한 연산을 할 때 매우 유용하다 <br/>

- 배열 A 에서 길이 N 의 서브배열을 모두 탐색해야 할 때, 일일이 다 계산하는 것은 너무나 비효율적이다 왜냐하면, 서브배열들은 서로 겹치게 되고, 그러므로 **서브 배열 끼리 공통요소**가 분명히 발생하기 때문이다
- 그리고 이 공통요소는, **이전 서브배열의 맨 첫 요소와, 새로운 서브배열의 맨 마지막 요소를 제외한 부분**에 해당한다.

![](https://res.cloudinary.com/practicaldev/image/fetch/s--os4Lz5eD--/c_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/h3h2h4s11pjgla88pqzp.png "사진출처 : https://dev.to/mwong068/sliding-window-technique-in-ruby-3og4")

```javascript

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
```

