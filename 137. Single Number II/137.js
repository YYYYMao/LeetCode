137. Single Number II
Given an array of integers, every element appears three times except for one. Find that single one.

Note:
Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
   var a = {};
   for(var i = 0 ; i < nums.length ; i++){
      if(a[nums[i]] !== undefined)
          a[nums[i]] ++;
      else
          a[nums[i]] = 1;
   }    
   for(var key in a){
       if(a[key] != 3) return parseInt(key);
   }
};
