198. House Robber
You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(nums.length < 2) return nums.length == 0 ? 0 : nums[0];
    var pre = nums[0],now = Math.max(pre,nums[1]);
    for(var i = 2 ; i < nums.length ; i++){
           var tmp = pre + nums[i]; //now
           pre = now;
           now = Math.max(pre,tmp) ;
    }
    return now;
};