Given a linked list, determine if it has a cycle in it.

Follow up:
Can you solve it without using extra space?

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    var s = head;
    var f = head;
    while(f !== null && f.next !==null){
        s = s.next;
        f = f.next.next;
        if(s == f) return true;
    }
    return false;
};