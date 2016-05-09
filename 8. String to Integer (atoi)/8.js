/**
 * @param {string} str
 * @return {number}

 */
var myAtoi = function(str) {
    str = str.replace(" ","");
    if(str =="") return 0;

    str = parseInt(str);
    if(str > 2147483647){
       str=2147483647;
    }else if(str < -2147483648){
       str = -2147483648 ;
    }
    
    if (isNaN(str)) return 0;
    return str;
};


console.log(myAtoi("aaa"));