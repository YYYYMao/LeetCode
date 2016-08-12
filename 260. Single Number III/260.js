260. Single Number III
Given an array of numbers nums, in which exactly two elements appear only once and all the other elements appear exactly twice. Find the two elements that appear only once.

For example:

Given nums = [1, 2, 1, 3, 2, 5], return [3, 5].

Note:
The order of the result is not important. So in the above example, [5, 3] is also correct.
Your algorithm should run in linear runtime complexity. Could you implement it using only constant space complexity?
// 011
// 101

// 110
// 001
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    var xor = 0;	
    for(var i  = 0 ; i < nums.length ; i++){
    	xor ^= nums[i];
    }
    for(var i = 1 ; ;i = i *2){
    	if(xor & i) {
    	  xor = i;
    	  break;
    	}  
    }
    var a = 0;
    var b = 0;
    for(var i = 0 ; i < nums.length ; i++){
         if(nums[i] & xor)  a^= nums[i];
         else b ^= nums[i];
    }
    return [a,b];
};