Given an integer, return its base 7 string representation.

Example 1:
Input: 100
Output: "202"
Example 2:
Input: -7
Output: "-10"
Note: The input will be in range of [-1e7, 1e7].

/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function(num) {
   if(num == 0) return '0'; 
   var neg = num < 0 ? true:false;
   num = Math.abs(num);
   var s = "";
   while(num>0){
       s = (num%7) + s ;
       num = Math.floor(num / 7 );
   }     
   return neg ? "-" + s : s;

};