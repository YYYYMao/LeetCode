Given a List of words, return the words that can be typed using letters of alphabet on only one row's of American keyboard like the image below.


American keyboard


Example 1:
Input: ["Hello", "Alaska", "Dad", "Peace"]
Output: ["Alaska", "Dad"]
Note:
You may use one character in the keyboard more than once.
You may assume the input string will only contain letters of alphabet.


/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
  let output = [];  
  let table = ["zxcvbnm,./","asdfghjkl;'","qwertyuiop[]","`1234567890-="]
  for(let w of words){
      i = w.toLowerCase();
      let sum =  {};
      i.split('').map(a => {
          if (table[0].indexOf(a ) > -1){
              sum['a'] = sum['a'] ? sum['a'] +1: 1;
          }else if(table[1].indexOf(a) > -1){
              sum['b'] = sum['b'] ? sum['b'] +1: 1;
          }else if(table[2].indexOf(a) > -1){
              sum['c'] = sum['c'] ? sum['c'] +1: 1;
          }else if(table[3].indexOf(a) > -1){
              sum['d'] = sum['d'] ? sum['d'] +1: 1;
          }
      })
      if(Object.keys(sum).length == 1) output.push(w);
  }  
  return output;
};