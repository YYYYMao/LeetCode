Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

    1
   / \
  2   2
 / \ / \
3  4 4  3

But the following [1,2,2,null,3,null,3] is not:
    1
   / \
  2   2
   \   \
   3    3
Note:
Bonus points if you could solve it both recursively and iteratively.

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
var isSymmetric = function(root) {
    if(root == null ) return true;
    return issym(root.left,root.right);
};

function issym(l,r){
    if(l == null && r == null) return true;
    if((l == null && r !== null) || (l !== null && r == null)) return false;
    if(l.val !== r.val) return false;
    if (!issym(l.left,r.right)) return false ;        
    if (!issym(l.right,r.left)) return false;
    return true; 
}