// Given a string and a string dictionary, find the longest string in the dictionary that can be formed by deleting some characters of the given string. If there are more than one possible results, return the longest word with the smallest lexicographical order. If there is no possible result, return the empty string.

// Example 1:
// Input:
// s = "abpcplea", d = ["ale","apple","monkey","plea"]

// Output: 
// "apple"
// Example 2:
// Input:
// s = "abpcplea", d = ["a","b","c"]

// Output: 
// "a"
// Note:
// All the strings in the input will only contain lower-case letters.
// The size of the dictionary won't exceed 1,000.
// The length of all the strings in the input won't exceed 1,000.


/**
 * @param {string} s
 * @param {string[]} d
 * @return {string}
 */
var findLongestWord = function(s, d) {
    // d = d.sort((a,b)=> {return a.length == b.length ? a > b : b.length - a.length; } );
    var res = "";
    for(let k = 0 ; k < d.length ; k++){
        let i = 0;
        for(let j = 0 ; j < d[k].length ;){
            if(d[k][j] == s[i]){
                i++;
                j++;
            }else{
                i++;
            }
            if(j == d[k].length) {
                if(d[k].length > res.length) res = d[k];
                else if (d[k].length == res.length && d[k] < res ) res = d[k];

            }else if(i > s.length) break;

        }

    }
    return res;
};