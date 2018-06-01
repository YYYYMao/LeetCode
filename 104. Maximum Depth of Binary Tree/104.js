104. Maximum Depth of Binary Tree
Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    return findDepth(root);
};

var findDepth = function(node){
  if(node == null) return 0;
  if(node.left == null && node.right == null) return 1;	
  return 1 + Math.max(findDepth(node.left),findDepth(node.right));
}