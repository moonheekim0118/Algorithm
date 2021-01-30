// boj4673 셀프넘버

const numList=[];

function calc(n){
    let result=0;
    for(let i = 0; i<n.length; i++){
        result+=+n.charAt(i)
    };
    return result;
};

function d(){
    for(let i = 1; i<10000; i++){
        let number = i+calc(i.toString());
        numList.push(number);
    }
};


function solution(){
    d();
    for(let i  = 1 ; i<=10000; i++){
        if(!numList.includes(i)){
            console.log(i);
        }
    }
};

solution();