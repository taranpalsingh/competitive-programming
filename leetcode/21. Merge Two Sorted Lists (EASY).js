var mergeTwoLists = function(l1, l2) {
  const head = new ListNode(); 
  let crt = head;
  while(l1 && l2) {
      if(l1.val > l2.val) {
          crt.next = l2;
          l2 = l2.next;
      } else {
          crt.next = l1;
          l1 = l1.next;
      }
      crt = crt.next;
  }
  crt.next = l1 || l2;
  
  return head.next;
};