/**
 * @param {string} sentence
 * @return {number}
 */
 var countValidWords = function(sentence) {
    let answer = 0;
    const s = sentence.split(" ");
    /[a-z]/.test
    for(let i = 0 ; i< s.length; i++){
        const word = s[i];
        let num = 1;
        const length = word.length;
        if(length < 1) continue;
        let punc = 0;
        let hypens = 0;
        for(let j = 0 ; j < length; j++){
            if(word[j]==='-') {
                if(j === 0 || j === length - 1 || hypens>0){
                    num=0;
                    break;
                }
                if(!/[a-z]/.test(word[j-1]) || !/[a-z]/.test(word[j+1]) ){
                    num = 0;
                    break;
                }
                hypens++;
            }
            if(word[j]==='.' || word[j]===',' || word[j]==='!') {
                if(j!== length-1 || punc > 0 || length===0){
                    num = 0;
                    break;
                }
                punc++;
            }
            
            if(!isNaN(+word[j])) {
                num = 0;
                break;
            }
            
        }
        answer+=num;
    };
    
    return answer;
};