226. Invert Binary Tree
Invert a binary tree

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    reverseNode(root);
    return root;
};
var reverseNode = function(node){
   if(node == null) return node;	
   var tmp = node.right;
   node.right = node.left;
   node.left = tmp;
   reverseNode(node.right);
   reverseNode(node.left);
}
0
1 2
3 4 5 6

