136. Single Number

Given an array of integers, every element appears twice except for one. Find that single one.

Note:
Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var sum = 0;	
    for(var i = 0 ; i < nums.length ; i++){
        sum = sum ^ nums[i];
    }
    return sum;
};