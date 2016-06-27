6. ZigZag Conversion
The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P    A   H   N
A P L S I  I G
Y     I    R
And then read line by line: "PAHNAPLSIIGYIR"
Write the code that will take a string and make this conversion given a number of rows:

string convert(string text, int nRows);
convert("PAYPALISHIRING", 3) should return "PAHNAPLSIIGYIR".
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    var str = [];	
    var f = 1;
    var ss = '';
    if(s == '' ) return s;
    if(numRows < 2) return s;
    for(var i = 0 ; i < numRows ; i++){
    	str[i] = '';
    }
    for(var i = 0 ,j = 0 ; i < s.length ; i++){
         	str[j] = str[j]+s[i];
         	if( (f==1) ){
         	       j++; 
                    if(j == numRows){
                    	f = -1;
                          j = j-2;
                    }
         	}else if((f == -1)){
                   j--;
                   if(j == -1){
                   	f = 1;
                   	j = 1;
                   }
         	}
    }
    for(var i = 0 ; i < numRows; i++ ){
    	ss = ss + str[i];
    }
    return ss;
};
 // 0      6        12

 // 1   5 7    11 13

 // 2 4   8 10    14

 // 3      9         15 
