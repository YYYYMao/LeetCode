290. Word Pattern
Given a pattern and a string str, find if str follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in str.

Examples:
pattern = "abba", str = "dog cat cat dog" should return true.
pattern = "abba", str = "dog cat cat fish" should return false.
pattern = "aaaa", str = "dog cat cat dog" should return false.
pattern = "abba", str = "dog dog dog dog" should return false.
Notes:
You may assume pattern contains only lowercase letters, and str contains lowercase letters separated by a single space.

/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    str = str.split(' ');
    if(str.length != pattern.length) return false;
    var map = {};
    var set = [];
    for(var i = 0 ; i < pattern.length ; i++){
    	if(map[pattern[i]] == str[i]){

    	}else if (map[pattern[i]] && map[pattern[i]] != str[i]){
                          return false;
    	}else{
    		if(set.indexOf(str[i]) != -1){
                                 return false;
    		}
    		map[pattern[i]] = str[i];
    		set.push(str[i]);
    	}

    }
    return true;
};