/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */


 var countStudents = function(students, sandwiches) {
    while(sandwiches.length){
        const sandwich = sandwiches[0];
        let pick = false;
        let length = students.length;
        let i = 0 ;
        while(i < length){
            if(students[0]===sandwich){
                pick = true;
                students.shift();
                sandwiches.shift();
                break;
            } else{
                students.push(students.shift());
                i++;
            }
        }
        if(!pick) break;
    }
     return sandwiches.length;
};