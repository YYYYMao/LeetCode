19. Remove Nth Node From End of List
Given a linked list, remove the nth node from the end of list and return its head.
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    var a = head ; 
    var count = 0;
    while(a!=null){
         count++;
         a = a.next;
    }
    var del = count - n +1;
    count = 1;
    var node = head;
    var pre = null;
    while(node){
         if(count == del){
            if(count == 1){
              head = head.next;
            }else{
              pre.next = node.next;
            } 
         }else{
            pre = node;
         }
         count++;
         node = node.next;

    }
    return head;
};