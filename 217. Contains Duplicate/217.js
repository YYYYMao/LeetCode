217. Contains Duplicate
Given an array of integers, find if the array contains any duplicates. 
Your function should return true if any value appears at least twice in the array, 
and it should return false if every element is distinct.

/**
 * @param {number[]} nums
 * @return {boolean}
 */
 // https://leetcode.com/discuss/108901/my-javascript-solution-evolution
 //104 ms
var containsDuplicate = function(nums) {
  var arr = [];
   for(var i = 0 ; i < nums.length ; i++){	
   	if(arr[nums[i]])
   	    return true;
   	arr[nums[i]] = true;
   }	
   return false;
};
 //120 ms
 var containsDuplicate = function(nums) {
  var arr = [];
   for(var i = 0 ; i < nums.length ; i++){	
   	if(arr[nums[i]] == 1 )
   	    return true;
   	arr[nums[i]] = 1;
   }	
   return false;
};
 //160 ms
 var containsDuplicate = function(nums) {
   nums = nums.sort();	
   for(var i = 0 ; i < nums.length-1 ; i++){	
   	if(nums[i] ==nums[i+1] )
   	    return true;
   }	
   return false;
};
 //788 ms
var containsDuplicate = function(nums) {
   var arr = [];	
   for(var i = 0 ; i < nums.length ; i++){
   	var n = arr.indexOf(nums[i]) ;
   	if(n != -1)
   	    return true;
   	arr.push(nums[i]);
   }	
   return false;
};
//1576 ms
var containsDuplicate = function(nums) {
   for(var i = 0 ; i < nums.length ; i++){
   	var n = nums.lastIndexOf(nums[i]) ;
   	if(n != -1 && n != i)
   		return true;
   }	
   return false;
};

