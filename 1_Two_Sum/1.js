/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {	
    for(var i = 0 ; i < nums.length ; i++){
    	if(nums.lastIndexOf((target - nums[i]))> i ) {
                       return [i , nums.lastIndexOf((target - nums[i]))];
    	} 
    }
};
console.log(twoSum([-1,-2,-3,-4,-5],-8));
console.log(twoSum([0,4,3,0],0));