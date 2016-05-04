'use strict';
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k){
  var jj =[];	
  var num = 1;
  var array = [];
  var str = '' ;
  for(var i = 1 ; i <= n ;i++){
     num  = num *i;
     array.push(i.toString());
     jj.push(num);
  }
  for(i = n-2 ; i >=-1 ; i --){	
      var r = jj[i] ;
      var j = parseInt(k/r);
      if(k%r > 0) {
      	j = j+1;
      	str += array[j-1];
      	array.splice(j-1, 1);
      }else if(k%r== 0 && j > 0){
      	str += array[j-1];
      	array.splice(j-1, 1);
      }else{
      	str += array[array.length-1];
      	array.splice(array.length-1,1);
      }
      k = k%r;
  }
  return str;
};
console.log(getPermutation(8,10000));