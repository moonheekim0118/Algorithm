function solution(strings, n) {
    strings.sort((a,b)=>a[n]===b[n]?a.localeCompare(b):a[n].localeCompare(b[n]));
    return strings;
}

// 같을 경우 전체 문자열 사전순 


console.log(solution(["abce", "abcd", "abce"],2));