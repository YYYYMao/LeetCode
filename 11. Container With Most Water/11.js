/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    var hh = 0;	
    for(var i = 0 ; i < height.length ; i++){
    	for(var j = height.length-1 ; j >0 ; j--){
    		if(height[j] >= height[i]){
    			var a = height[i]*(j-i);
    			if(a > hh) hh = a;
    			break;
    		}
    	}
    }
    for(var i = height.length-1 ; i > 0 ; i--){
    	for(var j = 0 ; j < height.length ; j++){
    		if(height[j] >= height[i]){
    			var a = height[i]*(i-j);
    			if(a > hh) hh = a;
    			break;
    		}
    	}
    }
    return hh;
};

