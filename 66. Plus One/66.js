// 66. Plus One
// Given a non-negative number represented as an array of digits, plus one to the number.

// The digits are stored such that the most significant digit is at the head of the list.
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    digits[digits.length-1] +=1;
    for(var j = digits.length-1 ; j > 0 ; j--){
        if(digits[j] > 9){
        	digits[j] = digits[j]-10;
        	digits[j-1] += 1;
        }
    }
    if(digits[0] > 9){
    	digits[0] = digits[0]-10;
    	digits.splice(0, 0, 1);
    }
    return digits;
};