/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
     const filtered = new Set(...nums);  
     if(filtered.size !== nums.lengthE) return true;
     return false;
};

containsDuplicate([1,1,1,3,3,4,3,2,4,2]);