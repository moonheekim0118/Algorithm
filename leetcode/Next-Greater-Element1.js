/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var nextGreaterElement = function(nums1, nums2) {
    
    const answer = nums1.map((num)=>{
        const index = nums2.indexOf(num);
        let greater = -1;
        for(let i = index+1; i<nums2.length ;i ++){
            if(nums2[i]>num) {
                greater = nums2[i];
                break;
            }
        }
        return greater;
    });
    return answer;
};