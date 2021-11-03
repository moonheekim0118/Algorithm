/**
 * @param {number[][]} moves
 * @return {string}
 */
 var tictactoe = function(moves) {

    if(moves.length < 5) return 'Pending';
    
    let left_list = ['0-2','1-1','2-0'];
    const right_list = ['0-0','1-1','2-2'];
    
    const row_first = ['0-0','0-1','0-2'];
    const row_second =['1-0','1-1','1-2'];
    const row_third = ['2-0','2-1','2-2'];
    
    const col_first = ['0-0','1-0','2-0'];
    const col_second = ['0-1','1-1','2-1'];
    const col_third = ['0-2','1-2','2-2'];
    
    function check(list){
        let left = 0;
        let right= 0;
        
        let row1= 0,
            row2 =0,
            row3 = 0,
            col1 = 0,
            col2 = 0,
            col3 = 0;
        for(let i = 0 ; i < 3 ; i++){
            
            if(list.indexOf(left_list[i])!==-1) left++;
            if(list.indexOf(right_list[i])!==-1) right++;
            if(list.indexOf(row_first[i])!==-1) row1++;
            if(list.indexOf(row_second[i])!==-1) row2++;
            if(list.indexOf(row_third[i])!==-1) row3++;
            if(list.indexOf(col_first[i])!==-1) col1++;
            if(list.indexOf(col_second[i])!==-1) col2++;
            if(list.indexOf(col_third[i])!==-1) col3++;
        }
        
        return left===3 || right === 3 || row1===3 || row2 === 3 || row3 === 3 || col1===3 || col2===3 || col3===3;
    }
    

    
    const A_MOVES =[];
    const B_MOVES =[];
    for(let i = 0 ; i < moves.length; i++){
        if(i%2===0){
            A_MOVES.push(`${moves[i][0]}-${moves[i][1]}`);
        } else {
            B_MOVES.push(`${moves[i][0]}-${moves[i][1]}`);
        }
    }
    
   
    if(A_MOVES.length < 3 && B_MOVES.length < 3) return 'Pending';
    const A_result = check(A_MOVES);
    const B_result = check(B_MOVES);

    if(moves.length < 9 && !A_result&&!B_result) return 'Pending';
    if(A_result === B_result) return 'Draw';
    if(A_result) return 'A';
    return 'B';
};