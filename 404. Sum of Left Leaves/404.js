404. Sum of Left Leaves
Find the sum of all left leaves in a given binary tree.
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
var sumOfLeftLeaves = function(root) {
    return getLeave(root,false);
};

var getLeave = function(node,left){
   if(node == null) return 0;
   if(node.left == null && node.right == null && left) {
   	return node.val;
   } 	
   return getLeave(node.left,true)+getLeave(node.right,false);
};
