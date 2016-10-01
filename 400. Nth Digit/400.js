400. Nth Digit
Find the nth digit of the infinite integer sequence 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ...
Note:
n is positive and will fit within the range of a 32-bit signed integer (n < 231).

Example 1:

Input:
3
Output:
3
Example 2:

Input:
11
Output:
0
Explanation:
The 11th digit of the sequence 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ... is a 0, which is part of the number 10.
/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function(n) {
    var i ;
    for(i = 1 ; ;i++){
        if(n <= i*9*Math.pow(10, (i-1))) break;
        n = n - i*9*Math.pow(10, (i-1));
    }
    i--;
    var q = parseInt(n/(i+1));  
    var r = n%(i+1);
    var start = Math.pow(10, (i))-1;
    if(r == 0){
       return parseInt((start + q ).toString()[i]);	
    }else if(r > 0){
       return parseInt((start + q+1 ).toString()[r-1]);	
    }
};
// 1 2 3 4 5 6 7 8 9            9 *1
// 10 11 ... 99   90*2 = 180
// 100 .. 999  900 * 3 = 2700
