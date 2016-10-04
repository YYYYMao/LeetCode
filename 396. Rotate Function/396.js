396. Rotate Function
Given an array of integers A and let n to be its length.

Assume Bk to be an array obtained by rotating the array A k positions clock-wise, we define a "rotation function" F on A as follow:

F(k) = 0 * Bk[0] + 1 * Bk[1] + ... + (n-1) * Bk[n-1].

Calculate the maximum value of F(0), F(1), ..., F(n-1).

Note:
n is guaranteed to be less than 105.

Example:

A = [4, 3, 2, 6]

F(0) = (0 * 4) + (1 * 3) + (2 * 2) + (3 * 6) = 0 + 3 + 4 + 18 = 25
F(1) = (0 * 6) + (1 * 4) + (2 * 3) + (3 * 2) = 0 + 4 + 6 + 6 = 16
F(2) = (0 * 2) + (1 * 6) + (2 * 4) + (3 * 3) = 0 + 6 + 8 + 9 = 23
F(3) = (0 * 3) + (1 * 2) + (2 * 6) + (3 * 4) = 0 + 2 + 12 + 12 = 26

So the maximum value of F(0), F(1), F(2), F(3) is F(3) = 26.

/**
 * @param {number[]} A
 * @return {number}
 */
var maxRotateFunction = function(A) {
    var max = 0;
    var sum = 0;
    var F = 0
    for(var i = 0 ; i < A.length ; i++){
    	F += A[i]*i;
    	sum += A[i];
    }
    max  = F;
    for(var i = 1 ; i < A.length ; i++){
    	F = sum + F - A.length * A[A.length -i];
    	if(F > max) max = F;
    }
    return max;
};

// sum = A B C D
// F(0) = 0A + 1B + 2C + 3D 
// F(1) = 1A + 2B + 3C + 0D = sum + F(0) - 4D
// F(2) = 2A + 3B + 0C + 1D = sum + F(1) - 4C
// F(3) = 3A + 0B + 1C + 2D = sum + F(2) - 4B