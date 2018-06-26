Given a string S and a character C, return an array of integers representing the shortest distance from the character C in the string.

Example 1:

Input: S = "loveleetcode", C = 'e'
Output: [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]
 

Note:

S string length is in [1, 10000].
C is a single character, and guaranteed to be in string S.
All letters in S and C are lowercase.

/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
var shortestToChar = function(S, C) {
    let arr = [];
    for(let i in S){
        if (S[i] == C ) arr.push(i);
    }
    let res = [];
    for(let j = 0 ; j < S.length ; j++){
        let n = arr.map(k => Math.abs(parseInt(k) - j)).sort((a,b)=> a-b)[0];
        res.push(n);
    }
    return res;
};