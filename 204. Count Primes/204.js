204. Count Primes
Description:

Count the number of prime numbers less than a non-negative number, n.
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    if(n < 2) return 0 ;	
    var arr = [];
    arr[0] = false;
    arr[1] = false;
    var c = 0;
    for(var i = 2 ; i < n ; i++){
        if(arr[i] == undefined){
        	arr[i] = true;
        	for(var j = 2 ; i*j <= n ; j++){
        	   arr[i*j] = false;
             }
             c++;
        }	
    }
     return c;
};
console.log(countPrimes(2));