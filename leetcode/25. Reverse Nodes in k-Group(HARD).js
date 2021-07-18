/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
  if(k === 1) {
      return head;
  }
  
  let curr = head, newHead = new ListNode(), index = 0, length = 0;
  let next = null, prev = null, firstElement = null, prevChainLastElement = new ListNode();

  while(curr) {
      length++;
      curr = curr.next;
  }

  // number of k chains that are to be reversed
  const reverseChainsCount = Math.floor(length/k);
  
  curr = head;
  while(curr) {
      index++
      if(index-1 === reverseChainsCount*k) {
          prevChainLastElement.next = curr;
          break;
      }

      if(index === k) {
          newHead = curr;
      }
      
      // first element of a reverse chain.
      if(index%k === 1) {
          firstElement = curr;
      }

      // last element of a subchain.
      if(index%k === 0) {
          prevChainLastElement.next = curr;
          prevChainLastElement = firstElement;
          firstElement.next = null;
      }
      next = curr.next;
      curr.next = prev;
      prev = curr;    
      curr = next;
  }
  
  return newHead;
};