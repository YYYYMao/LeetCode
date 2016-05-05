/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var s = x.toString().split('').reverse().join('').replace('-','');		
    // for(var i = 0 ; i < s.length ; i++){
    // 	if(s[i] == '0') s.replace('0','');
    // }
    if(x > 0){
       
    }else{
       s ='-'+s;	
    }
    if(parseInt(s) >2147483647 ||parseInt(s) < -2147483647){
    	s = 0;
    }
    return parseInt(s);
};

console.log(reverse(1463847412));