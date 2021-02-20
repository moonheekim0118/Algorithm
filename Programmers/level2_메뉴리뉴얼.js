
let COMB=[];
const CHECK=new Array(26).fill(false);

function combination(arr,len,idx, n, r){
    if(n==r){
        let name='';
        for(let i = 0; i<len; i++){
            if(CHECK[i]){
                name+=arr[i];
            }
        }
        return COMB.push(name);
        
    }
    for(let i = idx; i<len;i++){
        if(CHECK[i]) continue;
        CHECK[i]=true;
        combination(arr,len,i,n+1,r);
        CHECK[i]=false;
    }
}


const solution=(orders,course)=>{
    const ans=[];
    orders.sort((a,b)=>b.length-a.length);
    let list=[];
    const orderLen=orders.length;
    const courseLen=course.length;
    for(let i = 0 ; i<orderLen; i++){
        for(let j =0 ; j <courseLen;j++){
            const arr = orders[i].split("");
            combination(arr,arr.length,0,0,course[j]);
            for(let m = 0,combLen=COMB.length; m<combLen; m++){
                const nowMenu=COMB[m].split("").sort().join("");
                const idx = list.findIndex((v,i)=>v.menu===nowMenu);
                if(idx!==-1) {
                    list[idx].cnt++;
                } else{
                    list.push({menu:nowMenu,cnt:1,course:course[j]});
                }
            }
            COMB=[];
            CHECK.fill(false);
        }
    }

    for(let i = 0 ; i < courseLen ; i++){
        const menus = list.filter((v,_)=>v.course===course[i]).sort((a,b)=>b.cnt-a.cnt);
        const menusLen = menus.length;
        let idx = 0;
        let max=1;
        while(idx<menusLen){
            if(menus[idx].cnt<2) break;
            if(menus[idx].cnt>=max){
                max=menus[idx].cnt;
                ans.push(menus[idx].menu);
                idx++;
            } else {
                break;
            }
        }
    }
    return ans.sort();
};

solution(
    ["XYZ", "XWY", "WXA"], [2, 3, 4])