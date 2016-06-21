119. Pascal's Triangle II
Given an index k, return the kth row of the Pascal's triangle.

For example, given k = 3,
Return [1,3,3,1].

Note:
Could you optimize your algorithm to use only O(k) extra space?
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    var Pascal = [];
    if(rowIndex == 0) return [1];
    else if(rowIndex == 1) return[1,1];
    Pascal = [1,1];
    for(var i = 2 ; i < rowIndex+1 ; i++){
    	var pre = 1;
    	for(var j = 1 ; j < i+1 ; j++){
    		if(j == i ){
    			Pascal[j] = 1;
    		}else{
    		     var tmp = Pascal[j];
                               Pascal[j] =Pascal[j] + pre ;
                               pre = tmp;
    		}
    	}
    }
    return Pascal;
};