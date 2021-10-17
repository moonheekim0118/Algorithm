// /**
//  * @param {string} version1
//  * @param {string} version2
//  * @return {number}
//  */
//  var compareVersion = function(version1, version2) {
//     version1=version1.split(".");
//     version2=version2.split(".");
//     const ver1len = version1.length;
//     const ver2len = version2.length;
    
//     const len = Math.min(ver1len, ver2len);
    
//     for(let i = 0 ; i < len ;i++){
//         const first = +version1[i];
//         const second = +version2[i];
//         if(first > second) return 1;
//         if(second > first) return -1;
//     }
    
//     if(ver1len > ver2len) {
//         for(let j = ver2len ; j < ver1len; j ++){
//             if(+version1[j]>0) return 1;
//         }
//     } else if(ver2len > ver1len){
//         for(let j = ver1len ; j < ver2len; j++){
//             if(+version2[j]>0) return -1;
//         }
//     }
    
//     return 0;
// };

/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
 var compareVersion = function(version1, version2) {
    version1=version1.split(".");
    version2=version2.split(".");
    
    let i = 0,
        j = 0;
    
    while(i < version1.length || j < version2.length) {
        const v1 = version1[i] ? +version1[i] : 0;
        const v2 = version2[j] ? +version2[j] : 0;
        
        if(v1 > v2) return 1;
        else if(v2 > v1) return -1;
        
        i++;
        j++; 
    }
    return 0;
};