// Given an array where elements are sorted in ascending order, convert it to a height balanced BST.

// For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

// Example:

// Given the sorted array: [-10,-3,0,5,9],

// One possible answer is: [0,-3,9,-10,null,5], which represents the following height balanced BST:

//       0
//      / \
//    -3   9
//    /   /
//  -10  5

 /**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

var sortedArrayToBST = function(nums) {
    if(nums.length == 0) return null;
    var mid = parseInt(nums.length /2);
    var length = nums.length;
    var node = new TreeNode(nums[mid]);
    node.left = sortedArrayToBST(nums.slice(0,mid));
    node.right = sortedArrayToBST(nums.slice(mid+1,length));
    return node;
    
};

// var sortedArrayToBST = function(nums) {
//     if(nums.length === 0) return nums;
        
//     var half = Math.floor(nums.length / 2),
//         root = new TreeNode(nums[half]);
        
//     if(nums.slice(0, half).length > 0)
//         root.left = sortedArrayToBST(nums.slice(0, half));
//     if(nums.slice(half + 1).length > 0)
//         root.right = sortedArrayToBST(nums.slice(half + 1));
        
//     return root;
// };