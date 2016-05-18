/**
 * @param {number} num
 * @return {string}
 */
 var t = {
    '1000' : 'M',
    '900' : 'CM',
    '500' : 'D',
    '400' : 'CD',
    '100' : 'C',
    '90' : 'XC',
    '50' : 'L',
    '40' : 'XL',
    '10' : 'X',
    '9' : 'IX',
    '5' : 'V',
    '4' : 'IV',
    '1' : 'I',
}
var s = [1000 , 900 , 500 , 400 , 100 , 90 , 50 , 40 , 10 , 9 , 5 , 4 , 1] ;
var intToRoman = function(num) {
    var str = '';	
    while(num > 0){
          for(var i = 0 ; i < s.length ; i++){
          	if(num >= s[i]){
          	     num	 = num - s[i];
          	     str = str + t[s[i].toString()];
          	     break;
          	}
          }
    }
    return str;
};