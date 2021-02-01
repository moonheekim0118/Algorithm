function solution(n) {
    const ans1 = n.toString(3).split('').reverse().join('');
    const ans2 = parseInt(ans1, 3);
    return ans2;
}

console.log(solution(45));