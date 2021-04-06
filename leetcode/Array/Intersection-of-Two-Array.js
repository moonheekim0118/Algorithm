/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersect = function(nums1, nums2) {
     const intersection=[];
     let len1 = nums1.length;
     let len2 = nums2.length;
     nums1.sort((a,b)=>a-b);
     nums2.sort((a,b)=>a-b);
     let pointer1 = 0;
     let pointer2 = 0;
     while(pointer1<len1 && pointer2<len2){
         if(nums1[pointer1]===nums2[pointer2]){
            intersection.push(nums1[pointer1]);
             pointer1++;
             pointer2++;
         }
         else if(nums1[pointer1] < nums2[pointer2]){
             pointer1++;
         } 
         else{
             pointer2++;
         }
     }
    return intersection;
};

intersect( [4,9,5],[9,4,9,8,4]);