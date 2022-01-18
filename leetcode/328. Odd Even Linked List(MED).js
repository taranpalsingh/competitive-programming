/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
    if(!head) {
        return head;
    }
    const oddHead = head;
    let oddCurr = head;
    let evenHead = null, evenCurr = null;
    let curr = head, pos = 0;
    
    while(curr) {
        let next = curr.next;
        curr.next = null;
        pos++;
        
        if(pos%2) { //odd
            oddCurr.next = curr;            
            oddCurr = curr;
        } else {
            
            if(evenCurr) {
                evenCurr.next = curr;            
            } else {
                evenHead = curr;
            }    
            evenCurr = curr;
        }
        curr = next;
    }
    
    oddCurr.next = evenHead;
    return oddHead;
};
