Remove all elements from a linked list of integers that have value val.

Example:

Input:  1->2->6->3->4->5->6, val = 6
Output: 1->2->3->4->5

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    while(head){
       if(head.val == val) {
          head = head.next;
       }else{
           break;
       }         
    }
    if(head == null) return null;
    var current = head.next ;
    var pre = head;
    while(current){
        if(current.val == val){
            pre.next = current.next;
        }else {
          pre = current;
        } 
        current = current.next;
         
    }
    return head; 
};