326. Power of Three
Given an integer, write a function to determine if it is a power of three.

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
     var m = n.toString(3);	
     var count = 0;
     for(var i = 0 ; i < m.length ; i++){
         if(m[i] == 1) {
         	count ++
         }
         if(count >= 2 || m[i] > 1){
         	return false;	
         }
     }
     return (n>0) && (count == 1);
};
