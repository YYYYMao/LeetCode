/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var long = "";
    var ch = "";
    for(var i = 0 ; i < s.length ; i ++){
       for(var j = i ; j < s.length ; j ++){
       	if(ch.indexOf(s[j]) == -1){
       	   ch = ch + s[j];	
       	}else{
       	    break;	
       	}
       }
       if(ch.length > long.length) {
       	long = ch;
       } 	
       ch = "";
    }
   return long.length;
};
lengthOfLongestSubstring("pwwkew");