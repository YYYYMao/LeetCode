Given a binary tree, return all root-to-leaf paths.

Note: A leaf is a node with no children.

Example:

Input:

   1
 /   \
2     3
 \
  5

Output: ["1->2->5", "1->3"]

Explanation: All root-to-leaf paths are: 1->2->5, 1->3

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    var list = [];
    if(!root) return [];
    getPath(root,list,"");
    return list;
};

var getPath = function (root,list,s){
    if(!root.left && !root.right) list.push(s+root.val);
    if(root.left) getPath(root.left,list,s + root.val + "->");
    if(root.right) getPath(root.right,list,s + root.val + "->");
    // return root;
}