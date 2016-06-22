172. Factorial Trailing Zeroes
Given an integer n, return the number of trailing zeroes in n!.

Note: Your solution should be in logarithmic time complexity.
/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    var count = 0;	
    for(var i = 5 ; i <= n ; i = i*5){
    	count += Math.floor(n/i); 
    }
    return count;
};