/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    let dummy = new ListNode(0, null)
    dummy.next = head
    let node = dummy
    let i=1
    // reach the node till the point there is no change.
    while(i<left){
        node = node.next
        i++
    }
    
    let start = node
    let end = node.next
    node = node.next
    let curr = null
    while(i<=right){
        let temp = node.next
        node.next = curr
        curr = node
        node = temp
        i++
    }
    start.next = curr
    end.next = node
    return dummy.next
};