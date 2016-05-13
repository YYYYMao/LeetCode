/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 //slow 
var removeElement = function(nums, val) {
    for(var i = 0 ; i < nums.length ; i++){
         console.log(nums);
         if(nums[i] == val) {
          	nums.splice(i,1) ;
          	i -- ;
          } 	
    }
    return i;
};
//fast
var removeElement = function(nums, val) {
    var j =nums.length-1;
    for(var i = 0 ; i < j+1 ; i++){
         if(nums[i] == val) {
          	nums[i] = nums[j];
            j--;
            i -- ;
          } 	
    }
    return i;
};