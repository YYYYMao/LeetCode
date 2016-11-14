453. Minimum Moves to Equal Array Elements
Given a non-empty integer array of size n, 
find the minimum number of moves required to make all array elements equal, 
where a move is incrementing n - 1 elements by 1.
/**
 * @param {number[]} nums
 * @return {number}
 */

var minMoves = function(nums) {
    var n = nums.length;
    var min = Math.min.apply(null, nums);
    var sum = 0;
    for(var i = 0 ; i < n ; i++){
    	sum += nums[i] ;
    }
    return sum - n*min;

};