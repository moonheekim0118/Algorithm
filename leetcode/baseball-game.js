/**
 * @param {string[]} ops
 * @return {number}
 */
 var calPoints = function(ops) {
    const record =[];
    const ACTION = {
        "D": ()=> {
            record.push(record[record.length-1]*2);
        },
        "+": ()=> {
            const last = record.length -1;
            record.push(record[last]+record[last-1]);
        },
        "C": ()=> {
            record.pop();
        },
    }
    ops.forEach((v)=>{
        if(ACTION[v])  ACTION[v]();
        else record.push(+v);
 
    })
    return record.reduce((acc,pre)=>acc+=pre,0);
};