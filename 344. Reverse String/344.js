// 344. Reverse String
// Write a function that takes a string as input and returns the string reversed.

// Example:
// Given s = "hello", return "olleh".
// http://eddmann.com/posts/ten-ways-to-reverse-a-string-in-javascript/

/**
 * @param {string} s
 * @return {string}
 */
 //Runtime: 192 ms
var reverseString = function(s) {
    return s.split("").reverse().join("");
};

