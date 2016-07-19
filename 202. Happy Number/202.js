202. Happy Number
Write an algorithm to determine if a number is "happy".

A happy number is a number defined by the following process: 
Starting with any positive integer, replace the number by the sum of the squares of its digits, 
and repeat the process until the number equals 1 (where it will stay),
or it loops endlessly in a cycle which does not include 1. 
Those numbers for which this process ends in 1 are happy numbers.

Example: 19 is a happy number
 
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    var sum = 0;	
    var arr = [];
    if(n == 1) return true;
    while(arr.indexOf(n) == -1 ||arr.indexOf(n) == arr.length-1 ){	
        sum = sum+(n%10)*(n%10);	
        n = parseInt(n/10);
        if(n == 0){
        	if(sum == 1) return true;
        	else {
        	   n = sum;
        	   sum = 0;
        	   arr.push(n);
        	}   
        }
    }
    return false;
};
