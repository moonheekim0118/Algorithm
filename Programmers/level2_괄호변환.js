// function isBalacned(arr){
//     const stack=[];
//     if(arr[0]===')') return false;
//     for(let i = 0 , len=arr.length ; i<len; i++){
//         let flag = false;
//         if(arr[i]==='(') stack.push(arr[i]);
//         else{
//             while(stack.length){
//                 if(stack.pop()==='('){
//                     flag=true;
//                     break;
//                 }
//             }
//             if(!flag) return false;
//         }
//     }
//     return stack.length===0;

// };

function flip(str){
    return str.slice(1,str.length-1).split("").map((v)=>v==='('?')':'(').join("");
};

function solution(p){
    if(p.length===0) return p;
    let u ='';
    let v ='';
    let left=0;
    let right=0;
    let flag=false;
    for(let i = 0, len = p.length; i<len; i++){
        if(!flag){
            u=u+p[i];
            if(p[i]==='(') left++;
            else right++;
            if(left===right) flag=true;
        } else {
            v=v+p[i];
        }
    }
    if(u[0]==='(' && u[u.length-1]===')'){
        u+=solution(v);
        return u;
    } else{
        let result='('+solution(v)+')'+flip(u);
        return result
    }
};