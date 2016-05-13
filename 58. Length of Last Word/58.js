/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    if(s == '') return 0;
    s = s.split(' ')
    for(var j = s.length-1 ; j > 0 ; j--){
        if(s[j] == '') s.pop()
        else break;
    }
    return s[s.length-1].length;
};
