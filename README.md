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



### 🍅 중복된 요소를 제거하고 싶을 때 

자바스크립트에는 바로바로 **set** 이라는 객체가 있다. new Set을 생성하고 파라미터로 배열을 넣으면 배열 내부의 중복된 요소가 제거된다<br/>

```javascript
let set = [...new Set(array)]
```





<br/>

<br/>



### 🍅 1부터 N 까지의 요소를 담는 배열 만들기 



```javascript
 const arr = Array.from({length:n},(_,i)=> i+1); // 1부터 N 까지
 const arr = Array.from(new Array(n)) ; // 0부터 N-1 까지
```



<br/>

<br/>



### 🍅 해쉬맵

- 해쉬맵이란 해쉬테이블 처럼 `key-value 쌍` 으로 데이터를 저장하여, 추후에 사용할 때 빠르게 접근 할 수 있도록 도와주는 자료구조이다.
- 자바스크립트에서는 `ES6 Map ` 을 사용하여 구현할 수 있으며, 자바스크립트의 일반 객체와 다른점은 key 값으로 여러가지 타입을 넣을 수 있다는 것이다.  또한 Linked List 로 구현되어있기 때문에 orderable 하고, iterable 하며, 지정된 size에 따라 한정된 데이터만 저장 할 수도 있다. 

```javascript
let hasMap = new Map([[1,'first'],[2,'second'],[3,'third']]);
```

- hasMap.size() - 해쉬맵에 저장된 요소 갯수 반환
- hasMap.get(key) - key 값에 해당하는 요소 반환
- hasMap.has(key) - 해쉬맵에 key가 존재 여부 반환
- hasMap.set(key, value) - 해쉬맵에 저장 
- hasMap.delete(key) - key 값에 해당하는 요소 삭제
- hasMap.clear() - 모든 엘리먼트 삭제    



<br/>

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



<br/>

<br/>



### 🍅 [배열 / 링크드리스트] Floyd의 토끼와 거북이 알고리즘

사이클 디텍션, 즉 주어진 배열 혹은 링크드리스트에 사이클이 존재하는지 / 사이클의 시작 위치를 알 수 있는 알고리즘 이다.

- 투포인터 알고리즘의 심화버전으로, 토끼 포인터는 두칸씩 이동하고 거북이 포인터는 한칸 씩 이동한다.
- 이러다가 토끼와 거북이가 서로 위치가 바뀌게 되고 (처음에는 거북이 -> 토끼 였지만 계속 거듭하다보면 토끼 --> 거북이 인 상황까지 온다. 왜냐? 사이클이 있으니까. 여기서 토끼가 먼저 null에 도달하면 사이클이 없는 것이다) 마지막으로 토끼와 거북이가 만나게 되면,  사이클이 있다는 것을 증명할 수 있다.
- 사실 토끼와 거북이의 순서가 뒤바뀔 때가 바로 사이클이 최초로 발견 될 때인데, 이 때 링크드 리스트의 경우 순서를 검증할 수 없으므로, 토끼와 거북이의 위치가 같아질 때 까지 연산을 더 하는 것이다.

#### 정말 사이클이 있다고 해서 두칸씩 움직이는 토끼와 한칸씩 움직이는 거북이가 만날 수 있나 ? 안만날 수도 있지 않을까?

![](https://i.imgur.com/uH8WSf9.jpg)

- 사이클이 있을 경우는 꼭 토끼와 거북이의 위치가 뒤바뀌게 되고, (토끼가 사이클을 따라서 가게 되므로..) 뒤바뀐 후 부터, 토끼와 거북이의 차이는 1 씩 감소하게 된다. (2 -> 1 - > 0 )  그러면 당연히 차이가 0까지도 감소하게 되므로 둘은 꼭 만나게 되어있다!
- 오해햐지 말아야 할 것이, 토끼와 거북이가 만나는 지점이 사이클을 증명하는 지점은 아니라는 것이다. `토끼와 거북이가 만난다는 사실` 만이 사이클을 증명한다. 

```javascript
var hasCycle = function(head) {
    if(!head) return false;

    let slow = head;
    let fast = head.next;
    
    while(slow!==fast){
        if(fast === null || fast.next === null) return false;
        slow = slow.next;
        fast = fast.next.next;
    }

    return true;
};
```



<br/>

#### 사이클 시작점 

- 사이클의 시작점은`거북이가 토끼를 처음 앞지르게 되었을 때 토끼의 위치`가 된다.