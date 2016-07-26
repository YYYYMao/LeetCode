238. Product of Array Except Self

Given an array of n integers where n > 1, nums, return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

Solve it without division and in O(n).

For example, given [1,2,3,4], return [24,12,8,6].
Follow up:
Could you solve it with constant space complexity? (Note: The output array does not count as extra space for the purpose of space complexity analysis.)
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    var a = 1;
    var arr = [];
    for(var i = 0 ; i < nums.length ; i++){
    	arr.push(a);
    	a*=nums[i];
    }
    a = 1;
    for(var i = nums.length-1 ; i >-1 ; i--){
    	arr[i] *= a;
    	a*= nums[i];
    }
    return arr;
};
var productExceptSelf = function(nums) {
    var a = 1,b=1;
    var arr = [];
    for(var i = 0 ,j = nums.length-1; i < nums.length ; i++,j--){
    	if(arr[i] == undefined){
    	   arr[i] = a;	
    	}else{
    	   arr[i] *= a;	
    	}
    	a*=nums[i];
    	if(arr[j] == undefined){
    	   arr[j] = b;	
    	}else{
    	   arr[j] *= b;	
    	}
    	b*=nums[j];
    }
    return arr;
};