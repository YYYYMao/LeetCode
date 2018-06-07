Reverse a singly linked list.

Example:

Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL
Follow up:

A linked list can be reversed either iteratively or recursively. Could you implement both?

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// var reverseList = function(head) {
//     if (!head || !head.next) {
//         return head;
//     }
//     var cur = head;
//     var pre = null;
//     while(cur){
//           var n = cur.next;
//           cur.next = pre;
//           pre = cur;
//           cur = n;
//     }
//     return pre; 
// };
var reverseList = function(head) {
    return reverse(head,null);
};
var reverse = function(node,pre){
    if(!node) return pre;
    var res = node.next;
    node.next = pre;
    return reverse(res,node);
}
