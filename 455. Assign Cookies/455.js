455. Assign Cookies
Assume you are an awesome parent and want to give your children some cookies. But, you should give each child at most one cookie. Each child i has a greed factor gi, which is the minimum size of a cookie that the child will be content with; and each cookie j has a size sj. If sj >= gi, we can assign the cookie j to the child i, and the child i will be content. Your goal is to maximize the number of your content children and output the maximum number.

Note:
You may assume the greed factor is always positive. 
You cannot assign more than one cookie to one child.
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
  function sortNumber(a, b)
  {
    return a - b
  }
    g = g.sort(sortNumber);
    s = s.sort(sortNumber);
    var num = 0;
    for(var i = 0 , j = 0; j < s.length ; j++){
    	if(g[i] <= s[j]) {
    	   num++;
    	   i++;
    	}
    }
    return num;
};
7 8 9 10
5 6 7 8 