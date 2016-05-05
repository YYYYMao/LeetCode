/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var l3 = new ListNode(0);
    var carry = 0;
    var val=0;
    var node = l3 ;
    while(l1 !== null ||l2 !== null || carry !== 0){
    	if(l1 !== null ) {
    	  carry = carry + l1.val ;	
    	  l1 = l1.next;
    	}
    	if(l2 !== null ) {
    	  carry = carry + l2.val ;	
    	  l2 = l2.next;
    	}
    	node.val = carry %10;
    	carry = parseInt(carry /10);
    	if(l1 !== null ||l2 !== null || carry !== 0){
    	   node.next = new ListNode(0);
    	   node = node.next;	
    	}else{
    	   node.next = null	
    	}
    	

    }
    return l3;
};