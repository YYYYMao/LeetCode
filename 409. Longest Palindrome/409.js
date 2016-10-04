Given a string which consists of lowercase or uppercase letters, find the length of the longest palindromes that can be built with those letters.

This is case sensitive, for example "Aa" is not considered a palindrome here.

Note:
Assume the length of given string will not exceed 1,010.

Example:

Input:
"abccccdd"

Output:
7

Explanation:
One longest palindrome that can be built is "dccaccd", whose length is 7.

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    var n = 0,flag = 0,a = {};	
    for(var i = 0 ; i < s.length ; i++){
    	if(!a[s[i]]){
                 a[s[i]] = 0;
    	}
    	a[s[i]]++;
              flag ++;
    	if(a[s[i]] == 2){
    	    n = n +2;
    	    flag = flag -2;
    	    a[s[i]] = 0;	
    	}
    }
    if(flag > 0) flag = 1;
    return n+flag;
};

0 1
{ a: 1 }
0 2
{ a: 1, b: 1 }
0 3
{ a: 1, b: 1, c: 1 }
2 1
{ a: 1, b: 1, c: 0 }
2 2
{ a: 1, b: 1, c: 1 }
4 0
{ a: 1, b: 1, c: 0 }
4 1
{ a: 1, b: 1, c: 0, d: 1 }
6 -1
{ a: 1, b: 1, c: 0, d: 0 }