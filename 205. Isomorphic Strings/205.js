205. Isomorphic Strings
Given two strings s and t, determine if they are isomorphic.

Two strings are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character but a character may map to itself.

For example,
Given "egg", "add", return true.

Given "foo", "bar", return false.

Given "paper", "title", return true.
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    var a = {};	
    var b = [];
    for(var i = 0 ; i < s.length ; i++){
           console.log(i);	
          if(a[s[i]] && a[s[i]]!= t[i]){
          	return false; 
          }else if(a[s[i]] && a[s[i]]== t[i]){

          }else{
          	if(b.indexOf(t[i]) != -1) return false;
          	a[s[i]] = t[i];
          	b.push(t[i]);
          }
    }
    return true;
};