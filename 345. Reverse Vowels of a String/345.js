345. Reverse Vowels of a String
Write a function that takes a string as input and reverse only the vowels of a string.

Example 1:
Given s = "hello", return "holle".

Example 2:
Given s = "leetcode", return "leotcede".
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    var vowels = [];
    for(var i = 0 ; i < s.length ; i ++){
          if(s[i] == 'a' || s[i] == 'e' || s[i] == 'i' || s[i] == 'o' || s[i] == 'u' || s[i] == 'A' || s[i] == 'E' || s[i] == 'I' || s[i] == 'O' || s[i] == 'U'){
          	vowels.push(s[i]);
          }
    }
    s = s.split('');
    for(var i = 0 ; i < s.length ; i ++){
          if(s[i] == 'a' || s[i] == 'e' || s[i] == 'i' || s[i] == 'o' || s[i] == 'u' || s[i] == 'A' || s[i] == 'E' || s[i] == 'I' || s[i] == 'O' || s[i] == 'U'){
          	var a = vowels[vowels.length-1];
          	vowels.pop();
          	s[i] = a;
          }
    }
    s = s.join(''); 
    return s; 

};