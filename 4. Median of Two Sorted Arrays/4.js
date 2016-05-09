/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    nums1 = nums1.concat(nums2);
    nums1 = nums1.sort(function(a, b) {
  	return a - b;
    });
    console.log(nums1);
    if (nums1.length %2 == 0){
       var n = parseInt(nums1.length/2);
       return parseFloat((nums1[n]+nums1[n-1])/2);
    }else{
       var n = parseInt(nums1.length/2);	
       return nums1[n];
    }
};
console.log(findMedianSortedArrays([1,3,5],[1,5,10]));