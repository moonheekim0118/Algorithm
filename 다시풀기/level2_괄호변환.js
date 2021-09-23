
function isBalanced(arr){
    const stack =[];
    if(arr[0]===')') return false;
    for(let i = 0 ; i < arr.length; i++){
        let flag = false;
        if(arr[i]==="(") stack.push(arr[i]);
        else {
            while(stack.length){
                if(stack.pop()==="("){
                    flag= true;
                    break;
                }
            }
            if(!flag) return false;
        }
    }
    return stack.length === 0;
}

function flip(arr){
    let result = "";
    for(let i = 1 ; i < arr.length -1 ; i++){
        if(arr[i]==="(") result += ")";
        else result+="(";
    }
    return result;
}

function solution(p){
    if(p.length === 0) return p;
    if(isBalanced(p)) return p;
    let u = "";
    let v = "";
    let left = 0 ;
    let right = 0;
    let flag= false;
    for(let i = 0 ; i < p.length ; i++){
        if(!flag) {
            u=u+p[i];
            if(p[i]==="(") left++;
            else right++;
            if(left===right) flag=true;
        } else {
            v=v+p[i];
        }
    }
    if(isBalanced(u)){
        u+=solution(v);
        return u;
    } else {
        let result  = "(" + solution(v) + ")" + flip(u);
        return result;
    }
}