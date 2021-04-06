/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// with extra space
//  var rotate = function(nums, k) {
//      let len = nums.length;
//      let cnt = 0 ;
//      let end = len - 1;
//      let beg = 0 ;
//      while(cnt < k ){
//         let temp = nums[end];
//         let i = end;
//         while(i >= beg+1){
//             nums[i]=nums[i-1];
//             i--;
//         };
//         nums[beg]=temp;
//         cnt++;
//      }
// };

var rotate = function(nums, k) {
    for(let i = 0; i < k ; i ++){
        nums.unshift(nums.pop());
    }
};

// k 가 현재 배열보다 작을 수 잇음.

rotate([1,2],3);