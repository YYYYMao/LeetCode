190. Reverse Bits
Reverse bits of a given 32 bits unsigned integer.

For example, given input 43261596 (represented in binary as 00000010100101000001111010011100), return 964176192 (represented in binary as 00111001011110000010100101000000).

Follow up:
If this function is called many times, how would you optimize it?
https://segmentfault.com/a/1190000003483740
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
   n = n.toString(2).split('').reverse();
   var dif = 32 - n.length;
   for(var i = 0 ; i < dif ; i++){
   	n.push(0);
   }	
   return parseInt(n.join(''),2);
};

var reverseBits = function(n) {
   var res = 0;	
   for(var i = 0 ; i < 32 ; i++){
        res = (n&1)+2*res;
        n=n>>1;
   }	
   return res;
};
console.log(reverseBits(1));