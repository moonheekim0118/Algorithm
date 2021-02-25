
// 소팅 
// 맨 앞 (제일 작은 것) 과 맨 뒤 (제일 큰 것)를 더해보고 limit을 넘는지 확인.
// 어차피 가장 큰 요소는 가장 작은 것과 더해서 limit이 넘는다면 다른 것과 더해도 무조건 넘으므로!!!!!
// 맨 앞 + 맨뒤가 limit을 넘는다면 맨 앞 요소는 그대로 가져가고...

function solution(people, limit) {
    people.sort((a,b)=>a-b)
    let ans = 0,
        current = people.length-1,
        another = 0;
    while(current >= another){
        if(people[current]+people[another] <=limit){
            another++;
        }
        current--;
        ans++;
    }
    return ans;
}

console.log(solution(
    [70, 50, 80, 50],100));