## 👩🏻‍🍳🥗JavaScript Algorithm's Ingredients🥗





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

