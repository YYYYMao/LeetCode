350. Intersection of Two Arrays
Given two arrays, write a function to compute their intersection.

Example:
Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2, 2].

Note:
Each element in the result should appear as many times as it shows in both arrays.
The result can be in any order.
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  var pool = [];	
  var count = [];
  var count2 = [];
  for(var i = 0 ; i < nums1.length ; i++) {
     if(count[nums1[i]] >=1){
     	count[nums1[i]]++;
     }else{
     	count[nums1[i]] = 1;
     }
  } 

  for(var i = 0 ; i < nums2.length ; i++) {
     if(count2[nums2[i]] >=1){
     	count2[nums2[i]]++;
     }else{
     	count2[nums2[i]] = 1;
     }
  }
  var l = count.length > count2.length ? count.length: count2.length;
  for(var i = 0 ; i < l ; i++) {
     if(count[i]>0 &&count2[i]>0 ) {
     	var min = count[i] > count2[i] ? count2[i] : count[i];
     	for(var j = 0 ; j < min ; j++ ){
     		pool.push(i);
     	}
     }
  } 
  return pool;
};
