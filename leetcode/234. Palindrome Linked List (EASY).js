/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

var isPalindrome = function(head) {
  let slow = head, fast = head;
  // finding middle
  while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
  }

  // reversing list after midle
  let temp = slow, prev = null;
  while (temp) {
      let curr = temp;
      temp = curr.next;
      curr.next = prev;
      prev = curr;
  }

  // comparing actual first half with new reversed list
  let newHead = prev;
  while (newHead) {
      if (newHead.val != head.val) return false
      head = head.next;
      newHead = newHead.next;
  }
  return true;
};




// 2nd approach
var isPalindrome2 = function(head) {
  let curr = head, arr = [];
  while (curr) {
      arr.push(''+curr.val);
      curr = curr.next;
  }

  const rev = [...arr].reverse();
  // console.log(arr.join(''));
  // console.log(rev.join(''));
  return arr.join('') === rev.join('')

  // let i = 0, j = arr.length-1;
  // while (i<=j) {
  //     if (arr[i]!=)
  // }
};