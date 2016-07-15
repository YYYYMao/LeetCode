189. Rotate Array

Rotate an array of n elements to the right by k steps.

For example, with n = 7 and k = 3, the array [1,2,3,4,5,6,7] is rotated to [5,6,7,1,2,3,4].

Note:
Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    k = k % nums.length;	
    for(var i = 0 ; i < k ; i++){
    	nums.splice(0,0,nums[nums.length -1]);
    	nums.pop();
    }
};

var rotate = function(nums, k) {
    k = k % nums.length;
    var a = nums.slice(nums.length - k).concat(nums.slice(0, nums.length-k));
    for(var i = 0 ; i < nums.length ; i++){
    	nums[i] = a[i];
    }
};