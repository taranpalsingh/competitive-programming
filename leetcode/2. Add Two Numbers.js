/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    
  let sum = 0, carry = 0;
  const headPointer = new ListNode();
  let prev = null, head = headPointer;
  
  while(l1 || l2 || carry) {
      let left = 0;
      let right = 0;
      if(l1) {
          left += +l1.val;
          l1 = l1.next;
      }
      if(l2) {
          right += +l2.val;
          l2 = l2.next;
      }
      sum = left+right+carry;
      console.log(sum)
      carry = (sum>9)? 1: 0;
      const l3Node = new ListNode(sum%10, null);
      head.next = l3Node;
      head = head.next;
  }
  return headPointer.next;
};