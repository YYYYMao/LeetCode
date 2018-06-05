Given a binary tree, return the bottom-up level order traversal of its nodes' values. (ie, from left to right, level by level from leaf to root).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its bottom-up level order traversal as:
[
  [15,7],
  [9,20],
  [3]
]

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    var arr = [];
    if(root == null ) return arr;
    arr.push([root.val]);
    levelArr(1,root.left,arr);
    levelArr(1,root.right,arr);
    arr = arr.reverse();
    return arr;
    
};

function levelArr (level , root,arr){
    if(root == null) return;
    else{
        if(arr[level] == undefined) arr[level] = [];
        arr[level].push(root.val);
        levelArr(level+1,root.left,arr);
        levelArr(level+1,root.right,arr);
    }

}
