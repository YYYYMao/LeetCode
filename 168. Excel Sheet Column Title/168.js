168. Excel Sheet Column Title
Given a positive integer, return its corresponding column title as appear in an Excel sheet.

For example:

    1 -> A
    2 -> B
    3 -> C
    ...
    26 -> Z
    27 -> AA  
    28 -> AB 
/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
    var s = '';	
    while(n > 0){
    	r = (n-1)%26;
    	n = parseInt((n-1) / 26) ;
    	s = String.fromCharCode(r+65) + s;
    }
    return s ;
};    
var convertToTitle = function(n) {
    var arr = [];	
    while(n > 0){
    	r = (n-1)%26;
    	n = parseInt((n-1) / 26) ;
    	arr.push(String.fromCharCode(r+65));
    }
    return arr.reverse().join("");
}; 
