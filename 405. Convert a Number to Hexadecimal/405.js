405. Convert a Number to Hexadecimal
Given an integer, write an algorithm to convert it to hexadecimal. For negative integer, two’s complement method is used.

Note:

All letters in hexadecimal (a-f) must be in lowercase.
The hexadecimal string must not contain extra leading 0s. If the number is zero, it is represented by a single zero character '0'; otherwise, the first character in the hexadecimal string will not be the zero character.
The given number is guaranteed to fit within the range of a 32-bit signed integer.
You must not use any method provided by the library which converts/formats the number to hex directly.
Example 1:

Input:
26

Output:
"1a"
Example 2:

Input:
-1

Output:
"ffffffff"

/**
 * @param {number} num
 * @return {string}
 */
var toHex = function(num) {
    if(num == 0) return '0';
    var table = {
        10: 'a',
        11: 'b',
        12: 'c',
        13: 'd',
        14: 'e',
        15: 'f'
    }
    var s = "";
    if(num >= 0) {
       while(num>0){
           var res = num%16;
           if(res > 9) res = table[res];
           s = res + s ;
           num = parseInt(num / 16);
       } 
    }else{
        var sum = 0;
        var s = "";
        for(let i = 1 ; sum <= 0 ; i++){
            sum  = Math.pow(16,i) + num;
        }
        while(sum>0){
           var res = sum%16;
           if(res > 9) res = table[res];
           s = res + s ;
           sum = parseInt(sum / 16);
       } 
       s = ("ffffffff" + s).slice(-8);
    }
    return s;
};

