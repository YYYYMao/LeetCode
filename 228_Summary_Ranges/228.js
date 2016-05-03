/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
   var start = nums[0];    
   var end = nums[0];
   var result = [];
   for(var i = 0 ; i < nums.length ; i++){
       if(nums[i] + 1 == nums[i+1]){
           end = nums[i+1];
       }else{
           if(start != end){
               result.push(start+"->"+end);
           }else{
               result.push(start.toString());
           }
           start = nums[i+1];
           end = nums[i+1];
       }
       
   }
   return result;
};

