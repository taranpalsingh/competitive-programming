/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

var getIntersectionNode = function(headA, headB) {
  let currA = headA;
  let currB = headB;
  while (currA != currB) {
      currB = currB? currB.next: headA;
      currA = currA? currA.next: headB;
  }
  return currA;
};


var getIntersectionNode2 = function(headA, headB) {
  var getlength = function(head) {
      let count = 0;
      while (head) {
          head = head.next;
          count++;
      }
      return count;
  }

  const lenA = getlength(headA);
  const lenB = getlength(headB);
  if (lenA > lenB) {
      for(let i=0; i<lenA-lenB; i++) {
          headA = headA.next;
      }
  } else {
      for(let i=0; i<lenB-lenA; i++) {
          headB = headB.next;
      }
  }

  while (headA) {
      if (headA === headB) {
          return headA
      }
      headB = headB.next;
      headA = headA.next;
  }
  return null;
};


