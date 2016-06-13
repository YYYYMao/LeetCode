// 38. Count and Say
// The count-and-say sequence is the sequence of integers beginning as follows:
// 1, 11, 21, 1211, 111221, ...

// 1 is read off as "one 1" or 11.
// 11 is read off as "two 1s" or 21.
// 21 is read off as "one 2, then one 1" or 1211.
// Given an integer n, generate the nth sequence.

// Note: The sequence of integers will be represented as a string.
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    var arr = [];
    if(n == 1) return '1';
    arr.push('1');
    for(var i = 1 ; i < n ; i++){
             var str = arr[i-1];
             var l = 0;
             var newStr = '';
    	for(var j = 0 ; j < str.length ; j++){
                     l++;
                     if(str[j] != str[j+1]){
                           newStr = newStr+l+str[j];
                           l = 0;
                     }
    	}
    	arr.push(newStr);
    }
    return arr[n-1];
};