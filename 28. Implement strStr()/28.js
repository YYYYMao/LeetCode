// 28. Implement strStr()
// Implement strStr().

// Returns the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) { 
    if(needle == '') return 0;
    for(var i = 0 ; i < haystack.length - needle.length+1; i++){
       if(haystack[i] == needle[0]) {
      	var tmp = haystack.substr(i,needle.length);
      	if(tmp == needle ) return i;
      }     	
    }
    return -1;
};