383. Ransom Note
 Given  an  arbitrary  ransom  note  string  and  another  string  containing  letters from  all  the  magazines,  write  a  function  that  will  return  true  if  the  ransom   note  can  be  constructed  from  the  magazines ;  otherwise,  it  will  return  false.   

Each  letter  in  the  magazine  string  can  only  be  used  once  in  your  ransom  note.

Note:
You may assume that both strings contain only lowercase letters.

canConstruct("a", "b") -> false
canConstruct("aa", "ab") -> false
canConstruct("aa", "aab") -> true

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    if(ransomNote.length > magazine.length)  return false;
    var str = [];	 
    for(var i = 0 ; i < magazine.length ; i++){
          if(str[magazine.charCodeAt(i)-97] == undefined) str[magazine.charCodeAt(i)-97] = 0;
          str[magazine.charCodeAt(i)-97]++;
    }
    for(i = 0 ; i < ransomNote.length ; i++){
          if(str[ransomNote.charCodeAt(i)-97] == undefined) str[ransomNote.charCodeAt(i)-97] = 0;
          if(--str[ransomNote.charCodeAt(i)-97] < 0) return false;
    }
    return true;
};