We define the Perfect Number is a positive integer that is equal to the sum of all its positive divisors except itself.

Now, given an integer n, write a function that returns true when it is a perfect number and false when it is not.
Example:
Input: 28
Output: True
Explanation: 28 = 1 + 2 + 4 + 7 + 14
Note: The input number n will not exceed 100,000,000. (1e8)

/**
 * @param {number} num
 * @return {boolean}
 */
// (2^n-1)*2^(n-1)
var checkPerfectNumber = function(num) {
    var sum = 0;
    for(let i = 2 ; sum < num ; i++){
        sum = (Math.pow(2,i)-1)*Math.pow(2,i-1);
        if(sum == num) {
            return true;
        }

    }
    return false;
};