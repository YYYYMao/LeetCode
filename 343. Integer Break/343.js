343. Integer Break

Given a positive integer n, break it into the sum of at least two positive integers and maximize the product of those integers. Return the maximum product you can get.

For example, given n = 2, return 1 (2 = 1 + 1); given n = 10, return 36 (10 = 3 + 3 + 4).

Note: You may assume that n is not less than 2 and not larger than 58.

Hint:

There is a simple O(n) solution to this problem.
You may check the breaking results of n ranging from 7 to 10 to discover the regularities.
/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
    var sum = 1;	
    if (n == 2) return 1;
    else if (n == 3) return 2;

    while(n>4){
        n -=3;
        sum *=3;
    }
    sum *= n;
    return sum;
};
var integerBreak = function(n) {
    if (n <=3) return n-1;
    if(n %3 == 0)  return Math.pow(3,n/3);
    else if(n % 3 == 1) return 4*Math.pow(3,(n-4)/3);
    else if(n % 3 == 2) return 2*Math.pow(3,(n-2)/3);
};
// n = 2  1*1 = 1
// n = 3  2*1 = 2
// n = 4  2*2 = 4
// n = 5  3*2 = 6
// n = 6  3*3 = 9
// n = 7  3*4 = 12
// n = 8  3*3*2 = 18
// n = 9  3*3*3 = 27
// n = 10 3*3*4 = 36 