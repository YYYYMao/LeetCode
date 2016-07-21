// 125. Valid Palindrome

// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

// For example,
// "A man, a plan, a canal: Panama" is a palindrome.
// "race a car" is not a palindrome.

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.toLowerCase();
    s = s.replace(/\n/g, "");
    s = s.replace(/([\(\)\[\]\{\}\^\$\+\-\*\?\,\:\.\;\!\%\`\ \@\#\&\"\'\|\/\\])/g, '');
    console.log(s);
    for(var i = 0 , j = s.length - 1 ; i < parseInt((s.length)/2) ; i++ , j--){
    	if(s[i]!=s[j]) return false;
    }
    return true;
};

// var isPalindrome = function(s) {
//     s = s.toLowerCase();
//     s = s.replace(/^a-z0-9]/g, "");
//     console.log(s);
//     for(var i = 0 , j = s.length - 1 ; i < parseInt((s.length)/2) ; i++ , j--){
//     	if(s[i]!=s[j]) return false;
//     }
//     return true;
// };
// var s = "a.";
// isPalindrome(s);
