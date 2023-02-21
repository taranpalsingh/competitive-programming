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
var reverseList = function(head) {
  let temp = head, prev = null;
  while (temp) {
      let curr = temp;
      temp = curr.next;
      curr.next = prev;
      prev = curr;
  }
  return prev;
};