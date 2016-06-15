258. Add Digits
Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.

For example:

Given num = 38, the process is like: 3 + 8 = 11, 1 + 1 = 2. Since 2 has only one digit, return it.

Follow up:
Could you do it without any loop/recursion in O(1) runtime?
http://dtstor.com/programing/leetcode-solution-258-add-digits.html

/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    num = num.toString().split('');
    var sum = 0;
    for(var i = 0 ; i < num.length ; i++){
         sum = sum + parseInt(num[i]);
         if(sum > 9) sum = parseInt(sum/10) + sum%10;
    }
    return sum;
};
