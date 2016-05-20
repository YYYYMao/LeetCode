/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var n = 1;
    var i , j ,tmp;
    if(nums == [])	 return 0;
    if(nums.length == 1)	 return 1;
    tmp = nums[0];
    for(i = 0 , j = i+1 ; i < nums.length ,j < nums.length;j++){		
         if(tmp != nums[j] ){
               nums[i+1] = nums[j];
               n++;
               i++;
               tmp = nums[j];
          }
    }
    return n;
};