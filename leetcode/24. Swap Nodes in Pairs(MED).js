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
var swapPairs = function(head) {
  let curr = head, prev = null, prevChain = new ListNode(), index = 0, newHead = head;
  
  while(curr) {
      index++;
      if(index === 2) {
          newHead = curr;
      }
      if(index%2 === 0) {
          let nextNode = curr.next;
          prevChain.next = curr;
          curr.next = prev;
          prev.next = nextNode;
          prevChain = prev;
          curr = prev;
      } else {
          prev = curr;
      }
      curr = curr.next;
  }
  return newHead;
};