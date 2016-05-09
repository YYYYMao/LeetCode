/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var s = x.toString().split('').reverse().join('');	
    if (x == s ) return true;
    return false;
};