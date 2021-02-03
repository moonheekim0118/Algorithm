function solution(n) {
    for(let i =1; i<=n; i++){
        if(i*i===n) return (i+1)*(i+1);
        else if(i*i>n) break;
    };

    /**
     *  var root = Math.sqrt(n);
        var result = parseInt(root) - root === 0 ? (root + 1 ) * (root + 1) : "no";
         parseInt(root)-root 즉, 소숫점때고 - 소숫점붙어있고 ) 이렇게해서 0이면 제곱근이라는 소리이므로..!!
        return result;
     */
    return -1;
}