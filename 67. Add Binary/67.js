// 67. Add Binary
// Given two binary strings, return their sum (also a binary string).

// For example,
// a = "11"
// b = "1"
// Return "100".
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    var l = a.length>b.length ? a.length : b.length; 	
    a = a.split('');
    b = b.split('');
    var lo = [];
    var c = 0;
    for(var i = 1 ; i <= l ; i++){
    	if(a.length-i < 0){		
                lo[l-i] = c + parseInt(b[b.length-i]);
    	}else if(b.length-i <0){
                lo[l-i] = c +parseInt(a[a.length-i]) ;
    	}else{
    	   lo[l-i] = c +parseInt(a[a.length-i]) + parseInt(b[b.length-i]);	
    	} 
    	if(lo[l-i] > 1){
    		lo[l-i] = parseInt(lo[l-i]) -2;
    		c = 1; 
    	}else{
                          c = 0;		
    	}
    }
    lo = lo.join('');
    if(c == 1) lo= '1' + lo;
    if(lo.length == 1) return lo[0];
    return lo;
};
var addBinary = function(a, b) {
	a = parseInt(a,2);
	b = parseInt(b,2);
	a = a+b;
	return a.toString(2);
}