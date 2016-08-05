338. Counting Bits
Given a non negative integer number num. For every numbers i in the range 0 ≤ i ≤ num calculate the number of 1's in their binary representation and return them as an array.

Example:
For num = 5 you should return [0,1,1,2,1,2].

Follow up:

It is very easy to come up with a solution with run time O(n*sizeof(integer)). But can you do it in linear time O(n) /possibly in a single pass?
Space complexity should be O(n).
Can you do it like a boss? Do it without using any builtin function like __builtin_popcount in c++ or in any other language.
Hint:

You should make use of what you have produced already.
Divide the numbers in ranges like [2-3], [4-7], [8-15] and so on. And try to generate new range from previous.
Or does the odd/even status of the number help you in calculating the number of 1s?
'
/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
    var arr = [];
    if(num == 0 ) return [0];
    arr[0] = 0;
    arr[1] = 1; 
    for(var i = 2 ; i < num+1 ; i++){	
           arr[i] = 1+ arr[i % (Math.pow(2,parseInt(Math.log2(i))))];
    }
    return arr;
};
// 0             0
// 1             1

// 10           1
// 11           2

// 100         1
// 101         2
// 110         2 
// 111         3

// 1000       1
// 1001       2
// 1010       2
// 1011       3
// 1100       2
// 1101       3
// 1110       3
// 1111       4

// 11110   4

 