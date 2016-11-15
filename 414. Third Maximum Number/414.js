414. Third Maximum Number
Given a non-empty array of integers, return the third maximum number in this array. If it does not exist, return the maximum number. The time complexity must be in O(n).
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    var a = null , b = null ,c = null;
    for(var i = 0 ; i < nums.length ; i++){
    	if(nums[i] == a || nums[i] == b || nums[i] == c) continue;
    	if (nums[i] > a || a == null){
    		c = b;
    		b = a;
    		a = nums[i];
    	}else if (nums[i] > b || b == null){
    		c = b;
    		b = nums[i];
    	} else if(nums[i] > c || c == null){
    		c = nums[i];
    	}
    }
    if(c == null) return a;
    return c;
};