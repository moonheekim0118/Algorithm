var reverse = function(x) {
    if(x>0){
        x=x.toString().split("").reverse().join("");
        const ans = +x;
        if(ans >=2147483648) return 0;
        return ans;
    }  
    else{
        x=x*(-1);
        x=x.toString().split("").reverse().join("");
        const ans =(+x)*(-1);
        if(ans <=-2147483648) return 0;
        return ans;
    }
};

console.log(reverse(-123));