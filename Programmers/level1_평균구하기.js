function solution(arr) {
    return arr.reduce((accumulator,value)=>accumulator+value,0)/arr.length;
}