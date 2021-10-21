/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
 var fullJustify = function(words, maxWidth) {    
    function generateSpace(num){
      let space ='';
      for(let i = 0 ; i < num ; i++ ) space+=' ';
      return space;
    };
    
    const order = [];
    const space = [];
    let temp = [];
    let count = 0;
    let len = 0;
    words.forEach((word)=>{
        const length = word.length;
        if(count === 0 || (count+length+1) <= maxWidth+1) {
            temp.push(word);
            len += length;
        } else {
            order.push([...temp]);
            space.push(maxWidth-len);
            len = length;
            temp = [word];
            count = 0;
        }
        count+=length+1;
    })
    order.push(temp);
    space.push(maxWidth-len);
    const answer = order.map((textArray,idx)=> {
        // 마지막 단어 혹은 단어 하나로 이루어진 경우 
        const length = textArray.length;
        if(length===1){
            return textArray[0]+(generateSpace(space[idx]));
        } else if(idx === order.length-1){
            let text = "";
            let count = space[idx];
            for(let i = 0 ; i < length ; i++){
                text+= count ? textArray[i]+" " : textArray[i];
                count--;
            }
            
            return text+generateSpace(count);
        } 
        else {
            let text= "";
            const distribution = Math.floor(space[idx]/ (length-1));
            let left_space =space[idx]- distribution*(length-1);
            let left_empty = 1;
            for(let i = 0 ; i < length-1; i++){
                left_space ? text+=textArray[i]+generateSpace(distribution+left_empty) 
                : text+=textArray[i]+generateSpace(distribution) ;
                if(left_space) left_space--;
            }
            text+=textArray[length-1];
            return text;
        }
    });
    
    return answer;
};