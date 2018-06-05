Given a binary tree, determine if it is height-balanced.

For this problem, a height-balanced binary tree is defined as:

a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

Example 1:

Given the following tree [3,9,20,null,null,15,7]:

    3
   / \
  9  20
    /  \
   15   7
Return true.

Example 2:

Given the following tree [1,2,2,3,3,null,null,4,4]:

       1
      / \
     2   2
    / \
   3   3
  / \
 4   4
Return false.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    if(root == null) return true;
    var a = getDepth(root.left);
    var b = getDepth(root.right);
    if(a == false || b == false) return false;
    if(Math.abs(a - b) > 1 ) return false;
    return true;
};

var getDepth = function(root){
    if(root == null) return 1;
    var a = getDepth(root.left);
    var b = getDepth(root.right);
    if(a == false || b == false) return false;
    if(Math.abs(a - b) > 1 ) return false;
    return Math.max(a,b)+1;
}