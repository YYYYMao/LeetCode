/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var a = [];	
    for(var i = 0 ; i < s.length ; i++){
        if((s[i] == ')' && a[a.length-1] == '(' )|| (s[i] == ']' && a[a.length-1]  == '[')|| (s[i] == '}' && a[a.length-1]  == '{' )){
             a.pop();
        }else{
        	a.push(s[i]);
        }
    }
    if(a.length == 0) return true;
    return false;
};