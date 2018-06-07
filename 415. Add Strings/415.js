Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2.

Note:

The length of both num1 and num2 is < 5100.
Both num1 and num2 contains only digits 0-9.
Both num1 and num2 does not contain any leading zero.
You must not use any built-in BigInteger library or convert the inputs to integer directly.

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    var carry = 0;
    var s = ""; 
    var sum = 0;
    for(let i = num1.length-1 , j = num2.length -1 ; ; i-- , j--){
      if(i >= 0 && j >= 0){
        sum = (num1[i]*1 +  num2[j]*1 + carry) ;
        n = sum % 10;
        carry =Math.floor(sum/10);
        s = n + s;          
      }else if(i>=0 || j>=0){
          if(j>=0){
              sum = ( num2[j]*1 + carry) ;
          }else{
              sum = (num1[i]*1 + carry) ;
          }
          n = sum % 10;
          carry =Math.floor(sum/10);
          s = n + s; 

      }else{
          break;
      }
    }
    if(carry > 0)
      return carry.toString() + s;
    return s;

};
