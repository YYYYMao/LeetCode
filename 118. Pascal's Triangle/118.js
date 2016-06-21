118. Pascal's Triangle
Given numRows, generate the first numRows of Pascal's triangle.

For example, given numRows = 5,
Return

[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    var Pascal = [];
    if(numRows == 0) return [];
    else if(numRows == 1) return[[1]];
    else if(numRows == 2) return [[1],[1,1]];
    Pascal.push([1]);
    Pascal.push([1,1]);	
    for(var i = 2 ; i < numRows ; i++){
        var arr = [];	
        for(var j = 0 ; j < i+1 ; j++){
        	if(j == 0 || j == i){
        	   arr.push(1);	
        	}else{
        	   arr.push(Pascal[i-1][j]+Pascal[i-1][j-1]); 	
        	} 
        }	
        Pascal.push(arr);
    }
    return Pascal;
};
