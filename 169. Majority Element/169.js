169. Majority Element
Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always exist in the array.

/**
 * @param {number[]} nums
 * @return {number}
 */
// 1. 計算每個數字出現次數
// 2. 把陣列sort 取中間值
var majorityElement = function(nums) {
    var n = Math.floor(nums.length/2);	
    var count = 0;
    var arr = [];
    if(nums.length == 0) return null;
    for(var i = 0 ; i < nums.length ; i++){
       if(arr.indexOf(nums[i]) == -1){
       	arr.push(nums[i]);
       	for(var j = i ; j < nums.length ; j++){
       	  if(nums[i] == nums[j]){
                 count++;
       	  }
             }
             console.log(count);
       }	
       if(count > n )
       	return nums[i];
       count = 0;
    }
    return null;
};