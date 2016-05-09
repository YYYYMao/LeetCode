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
var mergeTwoLists = function(l1, l2) {
    var l3 = new 	ListNode(0);
    var node = l3;
    if(l1 == null && l2 == null){
    	return null;
    }
    while(l1 != null || l2 != null){
    	if(l1 == null){
               node.val = l2.val;
    	  l2 = l2.next;
    	}else if(l2 == null){
                 node.val = l1.val;
    	    l1 = l1.next;
    	}else if(l1.val < l2.val){
    	    node.val = l1.val;
    	    l1 = l1.next;
    	}else{
    	    node.val = l2.val;
    	    l2 = l2.next;	
    	}
    	if(l1 !== null ||l2 !== null ){
    	   node.next = new ListNode(0);
    	   node = node.next;	
    	}else{
    	   node.next = null	
    	}
    }
    return l3
};