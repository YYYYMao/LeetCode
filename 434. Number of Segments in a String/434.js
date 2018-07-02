
Count the number of segments in a string, where a segment is defined to be a contiguous sequence of non-space characters.

Please note that the string does not contain any non-printable characters.

Example:

Input: "Hello, my name is John"
Output: 5

/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    let n = 0;
    if(s == "") return 0;
    for(let i = 0 ; i < s.length ; i++){
        if(s[i] == " " && s[i-1] !== " " && i !== 0) n++;
    }
    if(s.slice(-1) !== " ") n++;
    return n;
};