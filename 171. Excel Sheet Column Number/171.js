171. Excel Sheet Column Number
Related to question Excel Sheet Column Title

Given a column title as appear in an Excel sheet, return its corresponding column number.

For example:

    A -> 1
    B -> 2
    C -> 3
    ...
    Z -> 26
    AA -> 27
    AB -> 28 

/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    var n = 0;	
    var p = 1;
    for(var i = s.length -1 ; i >= 0 ; i--){
          n = n + (s[i].charCodeAt()-64)*p;
          p = p *26;
    }
    return n;
};    