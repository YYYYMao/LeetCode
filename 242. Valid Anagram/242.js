// 242. Valid Anagram
// Given two strings s and t, write a function to determine if t is an anagram of s.

// For example,
// s = "anagram", t = "nagaram", return true.
// s = "rat", t = "car", return false.

// Note:
// You may assume the string contains only lowercase alphabets.
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 //slow but simple
var isAnagram = function(s, t) {
    if(s == null || t ==null || s.length != t.length) return false;
    s = s.split('').sort().join('');
    t = t.split('').sort().join(''); 
    if(s == t ) return true;
    return false;
};
//fast
var isAnagram = function(s, t) {
    if(s == null || t ==null || s.length != t.length) return false;
    var alpha = [];
    for(var i = 0 ; i < 26 ; i ++){
         alpha[i] = 0;
    }
    for(var i = 0 ; i < s.length ; i++){
        alpha[s.charCodeAt(i) - 97]++;
        alpha[t.charCodeAt(i) - 97]--; 	
    } 
    for(var i = 0 ; i < 26 ; i ++){
         if(alpha[i] != 0){
         	return false;
         }
    }
    return true;
    // return false;
};