347. Top K Frequent Elements
Given a non-empty array of integers, return the k most frequent elements.

For example,
Given [1,1,1,2,2,3] and k = 2, return [1,2].

Note: 
You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    var arr = [];
    var sort = [];
    var result = [];
    for(var i = 0 ; i < nums.length ; i++){
         if(arr[nums[i]] == undefined) arr[nums[i]] = 0;
         arr[nums[i]]++;
    }
    for(i in arr){
       if(sort[arr[i]] == undefined) sort[arr[i]] = []; 	
       sort[arr[i]].push(i);
    }
    for(i = sort.length-1,j = 0 ; j < k ;i--){
             if(sort[i] !== undefined){
                for(var l = 0 ; l < sort[i].length ; l++){
                  result.push(parseInt(sort[i][l]));	
                  j++;	
                }	
             }
    }
    return result;
};