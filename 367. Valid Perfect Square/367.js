Given a positive integer num, write a function which returns True if num is a perfect square else False.

Note: Do not use any built-in library function such as sqrt.

Example 1:

Input: 16
Returns: True
Example 2:

Input: 14
Returns: False

/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    if(num == 1) return true;
    var min = 0 , max = parseInt(num/2);
    while(min <= max){
        var mid = parseInt((max+min)/2);
        var n = mid*mid;
        if(n < num) min = mid+1;
        if(n > num) max = mid-1;
        if(n == num) return true;
    }
    return false;
};
