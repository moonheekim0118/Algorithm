/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
//  var isAnagram = function(s, t) {
//      s=s.split("").sort();
//      t=t.split("").sort();
//     return JSON.stringify(s) === JSON.stringify(t);
// };

var isAnagram = function(s, t) {
    let len1 = s.length;
    let len2 = t.length;
    let sMap = new Map();
    let tMap = new Map();
    if(len1!==len2) return false;
    for(let i = 0; i< len1; i++){
        if(sMap.has(s[i])){
            let cnt = sMap.get(s[i])+1;
            sMap.set(s[i],cnt);
        } else{
            sMap.set(s[i],0);
        }
        if(tMap.has(t[i])){
            let cnt = tMap.get(t[i])+1;
            tMap.set(t[i],cnt);
        } else {
            tMap.set(t[i],0);
        }
    }
    
    if(sMap.size !== tMap.size) return false;
    let flag = true;
    sMap.forEach((v,i)=>{
        if(!tMap.has(i) || tMap.get(i)!==v) flag=false;
    });
    return flag;

};


console.log(isAnagram("rat", "car"));