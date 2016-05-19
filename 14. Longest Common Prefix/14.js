/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
   var str = '';	
   var flag = 0;
   if(strs.length == 0) return '';
   if(strs.length == 1) return strs[0];
   for(var i = 0 ; i < strs[0].length ; i++){
       for(var j = 0 ; j < strs.length ; j++){
            if(strs[0][i] == strs[j][i]){
            	   flag = 1;	
            }else{
            	   flag = 0;
            	   break;
            }
       }	
       if(flag == 0) {
       	break;
       }
       str += strs[0][i];
       flag = 0;	
   }
   return str;
    
};