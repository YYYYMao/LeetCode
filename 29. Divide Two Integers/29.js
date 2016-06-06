// 29. Divide Two Integers
// Divide two integers without using multiplication, division and mod operator.

// If it is overflow, return MAX_INT.

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    var q = 0,mu = 0;
    var m = 0;
    var d = 0,dd = 0;
    if(divisor == 0 ) return 2147483647;
    if(dividend < 0 && divisor < 0){
        dividend = Math.abs(dividend);
        divisor = Math.abs(divisor);
    }else if(dividend < 0){
        dividend = Math.abs(dividend);	
        m = 1;
    }else if(divisor < 0){
        divisor = Math.abs(divisor);	
        m = 1;	
    }
    while(dividend >= divisor){
    	d = dividend.toString().length;
             dd = divisor.toString().length;
             mu = d - dd ;
             var nd = divisor;
             for(var i = 0 ; i < mu ; i++){
                  nd = nd + '0';	
             }
             if(nd > dividend){
                mu = mu-1;
                nd = divisor;
                for(var i = 0 ; i < mu ; i++){
                  nd = nd + '0';	
                }
             }
             dividend = dividend - nd;
                var nq = 1;
    	   for(var i = 0 ; i < mu ; i++){
                   nq = nq + '0';	
                }
    	   q = q +parseInt(nq);
    	 
       }

    if(m){
    	q = parseInt('-'+q);
    }
    if(q > 2147483647)
    	return 2147483647;
    return q;
};